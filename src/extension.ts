import { commands, window, workspace } from "vscode";
import type { ExtensionContext } from "vscode";

export function activate(context: ExtensionContext) {
    const disposable = commands.registerCommand("reallyx.location", async () => {
        const editor = window.activeTextEditor;
        if(!editor) return;
        const wsFolder = workspace.getWorkspaceFolder(editor.document.uri);
        if(wsFolder) {
            await commands.executeCommand("workbench.files.action.collapseExplorerFolders");
            await commands.executeCommand("workbench.files.action.showActiveFileInExplorer");
        }
    });
    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}