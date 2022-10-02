package domain

type User struct {
	Id        int
	FirstName string
	LastName  string
	Email     string
	Phone     string
	// Password
	Listings []*Listing
	Requests []*Request
}
