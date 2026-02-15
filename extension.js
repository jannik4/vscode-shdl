const vscode = require("vscode");

const SHDL_KEYWORDS = [
    "extern",
    "use",
    "package",
    "type",
    "component",
    "impl",
    "constant",
    "signal",
    "variable",
    "file",
    "if",
    "else",
    "case",
    "when",
    "for",
    "switch",
    "process",
    "entity",
    "wait",
    "on",
    "until",
    "report",
    "assert",
    "while",
    "struct",
    "view",
    "interface",
    "of",
    "out",
    "in",
    "to",
    "downto",
    "others",
    "true",
    "false",
];

function activate(context) {
    console.log("SHDL extension activated");

    const provider = vscode.languages.registerCompletionItemProvider(
        "shdl",
        {
            provideCompletionItems() {
                return SHDL_KEYWORDS.map(keyword =>
                    new vscode.CompletionItem(
                        keyword,
                        vscode.CompletionItemKind.Keyword
                    )
                );
            }
        }
    );

    context.subscriptions.push(provider);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
