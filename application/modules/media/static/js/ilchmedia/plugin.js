CKEDITOR.plugins.add( 'ilchmedia', {
    lang: ['de', 'en'],
    icons: 'ilchmedia',
    class: 'cke_label',
    init: function( editor ) {
        editor.addCommand( 'ilchmediaDialog', new CKEDITOR.dialogCommand( 'ilchmediaDialog', { allowedContent: 'video[*];iframe[*]' } ) );
        editor.ui.addButton( 'ilchmedia', {
            label: 'Media',
            command: 'ilchmediaDialog',
            toolbar: 'ilchmedia'
        });

        CKEDITOR.dialog.add( 'ilchmediaDialog', this.path + 'dialogs/ilchmedia.js' );
    }
});