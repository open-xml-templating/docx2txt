#!/usr/bin/env node

showHelp=function () {
  console.info('Usage: docx2txt <input.docx>')
  console.info('--- returns the txt of that docx')
}

if(process.argv[2]=='--help' || process.argv[2]=='-h' || process.argv[2]==null || process.argv[2]==undefined)
{
  showHelp()
  return
}

var fs=require('fs')
var DocxGen=require('docxtemplater')
var content=fs.readFileSync(process.argv[2],"binary")
var doc = new DocxGen(content)
var text=doc.getFullText()
console.log(text);
