// webpack.config.js (sem TypeScript)
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: "development",
    entry: "./src/webPack/index.ts",  // Seu entry point está em webpack/
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options:{
                    configFile:"tsconfig.Front-end.json"
                }
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "Front-end", "assets", "js"),
    },
    devtool: "source-map",
};

export default config;