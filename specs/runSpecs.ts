import { runTests } from '@vscode/test-electron';
import * as path from 'path';

async function main() {
    try {
        // The folder containing the Extension Manifest package.json
        // Passed to `--extensionDevelopmentPath`
        const extensionDevelopmentPath = path.resolve(__dirname, '../');

        // The path to the extension test runner script
        // Passed to --extensionTestsPath
        const extensionTestsPath = path.resolve(__dirname, './suite/index');

        var launchArgs: string[] = ['--disable-gpu'];

        if (process.env.CODE_DEBUG)
            launchArgs = launchArgs.concat('--log=debug');
        else if (process.env.CODE_VERBOSE)
            launchArgs = launchArgs.concat('--verbose');

        // Download VS Code, unzip it and run the integration test
        await runTests({ extensionDevelopmentPath, extensionTestsPath, launchArgs });
    } catch (err) {
        console.error(err);
        console.error('Failed to run tests');
        process.exit(1);
    }
}

main();
