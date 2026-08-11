---
title: "食品流通向けAI帳票管理プロトタイプの開発"
summary: "食品流通の帳票を対象に、複数ページPDFと傾き補正に対応したAI帳票管理プロトタイプを開発した記事です。"
publishedAt: 2026-08-03
kind: "writing"
tags: ["writing", "ocr", "azure-ai", "opencv", "pdf"]
sourceUrl: "https://tech.kurojica.com/archives/62195/"
featured: true
role: "設計、実装、検証、技術記事の執筆"
period: "2026.08"
stack: ["Azure AI Document Intelligence", "OpenCV", "pypdf", "Python"]
scope: "クロジカ"
outcome: "食品流通向け帳票の傾き補正、複数ページ処理、OCR結果のCSV出力までを実装した"
team: "AI Labで開発と記事化を担当"
deliverable: "技術記事、AI帳票管理プロトタイプ"
audience: "帳票OCRや確認業務の支援に関心のあるエンジニア"
focus: "AIの結果を原本と照合し、人が確認・修正できる流れを作ること"
collaboration: "既存プログラムを食品流通向けに改修し、検証内容を記事化"
constraints:
  - "手書き、削除線、傾きなどを含む形式の異なる帳票を扱う必要があった"
  - "検証環境では一度に処理できるPDFが2ページまでだった"
evidence:
  - "pypdf でPDFを分割し、OCR結果を元のページ順で結合"
  - "OpenCV で帳票の傾きを補正"
  - "OCR結果をCSVとして出力"
highlights:
  - "3ページ以上のPDFを同じ処理で扱えるように対応"
  - "原本とOCR結果を照合して修正できる構成"
---

公開した技術記事です。  
[食品流通向けAI帳票管理プロトタイプの開発](https://tech.kurojica.com/archives/62195/)

既存のAI書類管理プログラムを、食品流通で使われる帳票向けに改修しました。  
複数ページPDFの処理、帳票の傾き補正、OCR結果のCSV出力までを実装し、原本との照合を前提にした確認フローを整えています。
