const SideBarMenu = function (color, direction) {
    this.isOpen = true
    this.isOnTheLeft = direction === 'left' ? true : false
    this.isOnTheRight = direction === 'right' ? true : false
    this.bgColor = color || 'red'
    this.menuDiv = null
    if (!this.isOnTheLeft && !this.isOnTheRight) {
        this.isOnTheLeft = true
    }
    this.init()
}

SideBarMenu.prototype.init = function () {
    this.render()
}

SideBarMenu.prototype.render = function () {
    if (this.menuDiv) {this.menuDiv.remove()}
    this.menuDiv = document.createElement('div')

    this.menuDiv.style.backgroundColor = this.bgColor
    this.menuDiv.style.width = '200px'
    this.menuDiv.style.height = '100vh'
    this.menuDiv.style.top = '0px'
    this.menuDiv.style.position = 'fixed'
    if (this.isOnTheLeft) {
        this.menuDiv.style.left = '0'
    }

    if (this.isOnTheRight) {
        this.menuDiv.style.right = '0'
    }

    if (!this.isOpen) {
        this.menuDiv.style.display = 'none'
    }

    document.body.appendChild(this.menuDiv)
}


SideBarMenu.prototype.toggleMenu = function () {
    if (this.isOpen === true) { this.isOpen = false }
    if (!this.isOpen === false) { this.isOpen = true }
    this.render()
}

const menu1 = new SideBarMenu()
const menu2 = new SideBarMenu('green', 'right')
menu2.toggleMenu()
