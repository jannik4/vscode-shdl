const vscode = require("vscode");

const SHDL_KEYWORDS = [
    "use",
    "package",
    "type",
    "component",
    "impl",
    "constant",
    "signal",
    "if",
    "else",
    "for",
    "in",
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
    "of",
    "out",
    "in",
    "to",
    "downto",
    "others",
    "true",
    "false",
    "fs",
    "ps",
    "ns",
    "us",
    "ms",
    "sec",
    "min",
    "hr",
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
