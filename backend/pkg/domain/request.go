package domain

type Request struct {
	Id        int
	UserId    int
	ListingId int
	Status    RequestStatus
}

type RequestStatus string

const (
	NewRequest       RequestStatus = "New"
	CanceledRequest  RequestStatus = "Canceled"
	AcceptedRequest  RequestStatus = "Accepted"
	CompletedRequest RequestStatus = "Completed"
)
