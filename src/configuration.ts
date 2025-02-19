import * as vscode from 'vscode';

export interface PluginConfig {
    // 打印文件名相关的配置
    enableFileNamePrinting: boolean;    // 是否启用文件名打印
    fileNamePattern: string;            // 文件名匹配模式
    showFullPath: boolean;              // 是否显示完整路径
    autoFormat: boolean;                // 新增：是否自动格式化文件名
}

export function getConfiguration(): PluginConfig {
    const config = vscode.workspace.getConfiguration('fileHelper');
    return {
        enableFileNamePrinting: config.get('enableFileNamePrinting', true),
        fileNamePattern: config.get('fileNamePattern', '*'),
        showFullPath: config.get('showFullPath', false),
        autoFormat: config.get('autoFormat', true)    // 新增：获取自动格式化配置
    };
}