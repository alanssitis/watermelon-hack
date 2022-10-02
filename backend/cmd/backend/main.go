package main

import (
	"log"
	"os"

	"github.com/alanssitis/watermelon-hack/backend/pkg/db"
)

func main() {
	db_endpoint := os.Getenv("DB_ENDPOINT")
	if db_endpoint == "" {
		log.Fatalf("Did not get DB_ENDPOINT")
	}
	println(db_endpoint)

	db, err := db.NewMariaDB(db_endpoint)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Pool.Close()

	user, err := db.GetUser(0)
	if err != nil {
		log.Fatal(err)
	}
	listing, err := db.GetListing(0)
	if err != nil {
		log.Fatal(err)
	}
	request, err := db.GetRequest(0)
	if err != nil {
		log.Fatal(err)
	}
	println(user)
	println(listing)
	println(request)

}
