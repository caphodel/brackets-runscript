/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */
/*
    In Brackets, all js files are modules handled by requirejs.
    Leave it that way to conform to Brackets coding standards.
*/
define(function (require, exports, module) {
    'use strict';

    var CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus"),
        DocumentManager = brackets.getModule("document/DocumentManager"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
        NodeDomain = brackets.getModule("utils/NodeDomain"),
        pythonDomain = new NodeDomain("python", ExtensionUtils.getModulePath(module, "node/pythonModule"));

    var RUN_SCRIPT_NAME   = "Run Script as JS",
        RUN_SCRIPT_COMMAND_ID  = "runscript.runjs",
        RUN_SCRIPT_PYTHON_NAME  = "Run Script as Python",
        RUN_SCRIPT_PYTHON_COMMAND_ID  = "runscript.runpython";

    function runjs() {
        var editor = EditorManager.getCurrentFullEditor();
        var selectedText = editor.getSelectedText();
        if (selectedText === '') {
            selectedText = DocumentManager.getCurrentDocument().getText();
        }
        console.log(eval(selectedText));
    }

    function runpython() {
        var editor = EditorManager.getCurrentFullEditor();
        var selectedText = editor.getSelectedText();
        if (selectedText === '') {
            selectedText = DocumentManager.getCurrentDocument().getText();
        }

        pythonDomain.exec('runPythonCode', selectedText);
    }

    CommandManager.register(RUN_SCRIPT_NAME, RUN_SCRIPT_COMMAND_ID, runjs);
    CommandManager.register(RUN_SCRIPT_PYTHON_NAME, RUN_SCRIPT_PYTHON_COMMAND_ID, runpython);

    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuDivider();
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(RUN_SCRIPT_COMMAND_ID);
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(RUN_SCRIPT_PYTHON_COMMAND_ID);

});
