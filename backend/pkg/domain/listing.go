package domain

type Listing struct {
	Id          int
	UserId      int
	Tag         ListingTag
	Title       string
	Description string
}

type ListingTag string

const (
	Wellbeing    ListingTag = "Wellbeing"
	Housekeeping ListingTag = "Housekeeping"
	Academics    ListingTag = "Academics"
	Activities   ListingTag = "Activities"
	Mechanics    ListingTag = "Mechanics"
	Culinary     ListingTag = "Culinary"
	FunLoving    ListingTag = "FunLoving"
	Other        ListingTag = "Other"
)
