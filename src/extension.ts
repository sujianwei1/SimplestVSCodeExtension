import * as vscode from 'vscode';
import { getConfiguration } from './configuration';

export function activate(context: vscode.ExtensionContext) {
    console.log('File Helper 扩展已激活');

    const printFileName = vscode.commands.registerCommand('fileHelper.printFileName', (uri: vscode.Uri) => {
        if (!uri?.fsPath) {
            vscode.window.showErrorMessage('未能获取文件路径');
            return;
        }

        const config = getConfiguration();
        const fileName = uri.fsPath.split(/[\/\\]/).pop() || '未知文件';

        // 使用配置决定是否格式化文件名
        const displayName = config.autoFormat ? 
            fileName.replace(/[_-]/g, ' ').trim() : 
            fileName;

        vscode.window.showInformationMessage(`文件名: ${displayName}`);
    });

    context.subscriptions.push(printFileName);
}

export function deactivate() {
    console.log('File Helper 扩展已停用');
}