import { createElement, Text, Wrapper } from '../utils/createElement'
import {Timeline, Animation} from '../utils/animation'
import {ease, linear} from '../utils/cubicBezier'
import {enableGesture} from '../utils/gesture'



export class ListView {
	constructor(config) {
		this.children = [];
		this.attributes = new Map();
		this.properties = new Map();
		this.state = Object.create(null);
	}

	setAttribute(name, value) {
		this[name] = value;
	}

	getAttribute(name) {
		return this[name];
	}

	appendChild(child) {
		this.children.push(child);
	}

	render() {
    let data = this.getAttribute('data');

		return <div class="list-view" style="min-width: 300px">
			{
        data.map(this.children[0])
      }
		</div>
	}

	mountTo(parent) {
		this.render().mountTo(parent);
	}
}
