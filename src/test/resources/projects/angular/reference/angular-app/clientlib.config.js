/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,

    // path to the clientlib root folder (output)
    clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/test-spa-angular-project/clientlibs",

    libs: {
        name: "test-spa-angular-project-angular",
        allowProxy: true,
        categories: ["test-spa-angular-project-angular"],
        embed: ["test-spa-angular-project.responsivegrid"],
        jsProcessor: ['default:none', 'min:none'],
        serializationFormat: "xml",
        assets: {
            js: [
                "dist/browser/**/runtime*.js",
                "dist/browser/**/polyfills*.js",
                "dist/browser/**/styles*.js",
                "dist/browser/**/vendor*.js",
                "dist/browser/**/main*.js",
                "dist/browser/**/*.map"
            ],
            css: [
                "dist/browser/**/*.css"
            ]
        }
    }
};
