function buildTower(num) {
    let tower = []
    let towerString = "*"

    for (let i = 0; i < num; i++) {
        tower.push(towerString)
        towerString += "**"
        for(let j = 0; j < i; j++) {
            tower[j] = " " + tower[j] + " "
        }
    }

    console.log(tower)
}

buildTower(3)