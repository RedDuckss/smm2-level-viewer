/* eslint-env browser */

const Item = require('./item');

class LifeUpShroom extends Item {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetOffsets.items.life_up_shroom;
	}

	draw() {
		this.data.scene.ctx.drawImage(
			this.scene.spriteSheet,
			this.spriteOffset.x,
			this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			this.data.position.x,
			(this.data.scene.canvas.height - this.data.position.y),
			this.data.dimensions.width,
			this.data.dimensions.height
		);
	}
}

module.exports = LifeUpShroom;