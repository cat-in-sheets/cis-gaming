let platforms;
function create() {
    platforms = this.physics.add.staticGroup();
    this.add.image(500, 500, 'background')
    platforms.create(500, 500, 'background')
}