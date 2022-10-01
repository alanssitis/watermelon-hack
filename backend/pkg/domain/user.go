package domain

type User struct {
	Id       int
	Name     string
	Email    string
	Listings []*Listing
	Requests []*Listing
}