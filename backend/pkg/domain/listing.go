package domain

type Listing struct {
	Id          int
	User        *User
	Tag         string
	Title       string
	Description string
}
