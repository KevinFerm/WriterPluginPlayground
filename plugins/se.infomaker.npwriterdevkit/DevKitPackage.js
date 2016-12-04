import './scss/index.scss'

import DevKitComponent from './DevKitComponent'
import DevKitNode from './DevKitNode'
import DevKitNodeComponent from './DevKitNodeComponent'
import DevKitConverter from './DevKitConverter'
export default {
    name: 'npwriterdevkit',
    id: 'se.infomaker.npwriterdevkit',
    configure: function (config) {
        config.addComponentToSidebarWithTabId(this.id, 'main', DevKitComponent)
        config.addNode(DevKitNode)
        config.addConverter('newsml', DevKitConverter)
        config.addComponent('devkitnode', DevKitNodeComponent)
    }
}
