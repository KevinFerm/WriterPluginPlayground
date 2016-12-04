/**
 * <object id="" type="insertnode">
 *      <data>
 *          <text>this is the text</text>
 *      </data>
 * </object>
 */

export default {
    type: 'devkitnode',
    tagName: 'object',

    matchElement: function (el) {
        return el.is('object[type="devkitnode"]');
    },

    import: function (el, node, converter) {
        node.id = el.attr('id')

        node.dataType = el.attr('type') // type is reserved so we use dataType

        const text = el.find('data>text')
        node.text = converter.annotatedText(text, [node.id, 'text']);

    },

    export: function (node, el, converter) {
        var $$ = converter.$$;

        el.attr({
            id: node.id,
            type: node.dataType,
        });

        var data = $$('data').append(
            $$('text').append(converter.annotatedText([node.id, 'text']))
        )

        el.append(data)

    }
}
