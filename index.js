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
    let startName = this.beginningLocation.horizontal
    let endName = this.endingLocation.horizontal
    eastWest.forEach(function(street, index) {
      if (startName === street) {
        startHorizontal = index
        console.log(startHorizontal)
      }
      else if (endName === street) {
        endHorizontal = index
        console.log(endHorizontal)
      }
    })
  }
}
