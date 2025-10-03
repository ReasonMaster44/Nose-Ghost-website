import json
from datetime import datetime, date

def get_gigs():
    with open("data/gigs.json") as file:
        gigs = json.load(file)
    
    current_gigs = {}
    past_gigs = {}
    
    for venue in list(gigs):
        gig_date = gigs[venue]["date"]

        if datetime.strptime(gig_date, "%d/%m/%Y").date() < date.today(): # If current gig has already passed
            past_gigs[venue] = gigs[venue]
        else:
            current_gigs[venue] = gigs[venue]

    return {"current-gigs": current_gigs,
            "past-gigs": past_gigs}