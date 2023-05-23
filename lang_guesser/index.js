import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { franc } from 'franc';
const langs = require('langs');

const text = process.argv[2];
const langCode = franc(text);

if (langCode === 'und'){
    console.log('error');
} else {
    const langResult = langs.where("3", langCode);
    const langName = langResult.name;
    console.log(langName);
}