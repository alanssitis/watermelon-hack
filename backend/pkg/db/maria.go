package db

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"

	"github.com/alanssitis/watermelon-hack/backend/pkg/domain"
)

const (
	Driver = "mysql"
)

type mariaDB struct {
	Pool *sql.DB
}

func NewMariaDB(dataSourceName string) (*mariaDB, error) {
	pool, err := sql.Open(Driver, dataSourceName)
	if err != nil {
		return nil, fmt.Errorf("NewMariaDB: %w", err)
	}

	// Create tables
	_, err = pool.Query(`
    CREATE TABLE IF NOT EXISTS users (
        id          INT NOT NULL PRIMARY KEY,
        first_name  VARCHAR(35),
        last_name   VARCHAR(35),
        email       VARCHAR(40),
        phone       VARCHAR(16)
    );
    `)
	if err != nil {
		return nil, fmt.Errorf("NewMariaDB: %w", err)
	}
	_, err = pool.Query(`
    CREATE TABLE IF NOT EXISTS listings (
        id          INT NOT NULL PRIMARY KEY,
        tag         VARCHAR(12),
        title       VARCHAR(100),
        description VARCHAR(500)
    );
    `)
	if err != nil {
		return nil, fmt.Errorf("NewMariaDB: %w", err)
	}
	_, err = pool.Query(`
    CREATE TABLE IF NOT EXISTS requests (
        id      INT NOT NULL PRIMARY KEY,
        status  VARCHAR(9)
    );
    `)
	if err != nil {
		return nil, fmt.Errorf("NewMariaDB: %w", err)
	}
	_, err = pool.Query(`
    CREATE TABLE IF NOT EXISTS user_listing (
        user_id     INT NOT NULL,
        listing_id  INT NOT NULL,
        PRIMARY KEY(user_id, listing_id)
    );
    `)
	if err != nil {
		return nil, fmt.Errorf("NewMariaDB: %w", err)
	}
	_, err = pool.Query(`
    CREATE TABLE IF NOT EXISTS user_request (
        user_id     INT NOT NULL,
        request_id  INT NOT NULL,
        PRIMARY KEY(user_id, request_id)
    );
    `)
	if err != nil {
		return nil, fmt.Errorf("NewMariaDB: %w", err)
	}
	_, err = pool.Query(`
    CREATE TABLE IF NOT EXISTS request_listing (
        request_id  INT NOT NULL,
        listing_id  INT NOT NULL,
        PRIMARY KEY(request_id, listing_id)
    );
    `)
	if err != nil {
		return nil, fmt.Errorf("NewMariaDB: %w", err)
	}

	return &mariaDB{Pool: pool}, nil
}

func (m mariaDB) GetUser(user_id int) (*domain.User, error) {
	var user *domain.User

	rows, err := m.Pool.Query(`SELECT * FROM users WHERE id=?`, user_id)
	if err != nil {
		return nil, fmt.Errorf("GetUser: %w", err)
	}
	err = rows.Scan(&user.Id, &user.FirstName, &user.LastName, &user.Email, &user.Phone)
	if err != nil {
		return nil, fmt.Errorf("GetUser: %w", err)
	}

	var query_id int

	row := m.Pool.QueryRow(`SELECT listing_id FROM user_listing WHERE user_id=?`, user_id)
	for err = row.Scan(&query_id); err != nil; row = m.Pool.QueryRow(`SELECT listing_id FROM user_listing WHERE user_id=?`, user_id) {
		listing, get_err := m.GetListing(query_id)
		if get_err != nil {
			return nil, fmt.Errorf("GetUser: %w", get_err)
		}
		user.Listings = append(user.Listings, listing)
	}
	if err != sql.ErrNoRows {
		return nil, fmt.Errorf("GetUser: %w", err)
	}

	row = m.Pool.QueryRow(`SELECT request_id FROM user_request WHERE user_id=?`, user_id)
	for err = row.Scan(&query_id); err != nil; row = m.Pool.QueryRow(`SELECT request_id FROM user_request WHERE user_id=?`, user_id) {
		request, get_err := m.GetRequest(query_id)
		if get_err != nil {
			return nil, fmt.Errorf("GetUser: %w", get_err)
		}
		user.Requests = append(user.Requests, request)
	}
	if err != sql.ErrNoRows {
		return nil, fmt.Errorf("GetUser: %w", err)
	}

	return user, nil
}

func (m mariaDB) GetListing(id int) (*domain.Listing, error) {
	var listing *domain.Listing

	rows, err := m.Pool.Query(`SELECT * FROM listings WHERE id=?`, id)
	if err != nil {
		return nil, fmt.Errorf("GetListing: %w", err)
	}
	err = rows.Scan(&listing.Id, &listing.Tag, &listing.Title, &listing.Description)
	if err != nil {
		return nil, fmt.Errorf("GetListing: %w", err)
	}

	rows, err = m.Pool.Query(`SELECT user_id FROM user_listing WHERE listing_id=?`, id)
	if err != nil {
		return nil, fmt.Errorf("GetListing: %w", err)
	}
	err = rows.Scan(&listing.UserId)
	if err != nil {
		return nil, fmt.Errorf("GetListing: %w", err)
	}

	return listing, nil
}

func (m mariaDB) GetRequest(id int) (*domain.Request, error) {
	var request *domain.Request

	rows, err := m.Pool.Query(`SELECT * FROM requests WHERE id=?`, id)
	if err != nil {
		return nil, fmt.Errorf("GetRequest: %w", err)
	}
	err = rows.Scan(&request.Id, &request.Status)
	if err != nil {
		return nil, fmt.Errorf("GetRequest: %w", err)
	}

	rows, err = m.Pool.Query(`SELECT user_id FROM user_request WHERE request_id=?`, id)
	if err != nil {
		return nil, fmt.Errorf("GetRequest: %w", err)
	}
	err = rows.Scan(&request.UserId)
	if err != nil {
		return nil, fmt.Errorf("GetRequest: %w", err)
	}

	rows, err = m.Pool.Query(`SELECT listing_id FROM request_listing WHERE request_id=?`, id)
	if err != nil {
		return nil, fmt.Errorf("GetRequest: %w", err)
	}
	err = rows.Scan(&request.ListingId)
	if err != nil {
		return nil, fmt.Errorf("GetRequest: %w", err)
	}

    return request, nil
}
