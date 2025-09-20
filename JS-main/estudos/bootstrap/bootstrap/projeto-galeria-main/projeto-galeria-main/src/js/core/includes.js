import $ from 'jquery'


const loadHtmlSuccessCalbaks =[]


export function onLoadHTMLSuccess(callback){
    if(!loadHtmlSuccessCalbaks.includes(callback)){
        loadHtmlSuccessCalbaks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCalbaks.forEach(callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()
