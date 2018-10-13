class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let startHorizontal = 0
    let endHorizontal = 0
    eastWest.forEach(function(street) {
      debugger
      if (this.beginningLocation.horizontal === street) {
        startHorizontal = index
        console.log(startHorizontal)
      }
      else if (this.endingLocation.horizontal === street) {
        endHorizontal = index
        console.log(endHorizontal)
      }
    })
  }
}
