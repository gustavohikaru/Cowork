# Landing page Uniporá

Página estática em português, com HTML, CSS e JavaScript, sem dependências externas.

Abra `index.html` no navegador. Para servir localmente, execute nesta pasta `python3 -m http.server 8000` e acesse `http://localhost:8000`.

Objetivo: apresentar os espaços, explicar valores e condições e preparar uma consulta de reserva. O formulário apenas gera uma mensagem local; não envia dados nem confirma reservas. O botão de cópia oferece seleção manual quando o navegador não permite acesso à área de transferência.

## Contato e publicação

Em `script.js`, preencha `CONTACT.whatsapp` com o número oficial internacional, apenas dígitos, ou `CONTACT.email` com o e-mail oficial. O botão de envio aparece quando há contato configurado. WhatsApp tem preferência se ambos forem preenchidos. Nenhum contato fictício foi usado.

Antes da publicação, confirmar com a administração:

- Nome institucional e autorização de uso da marca no contexto da locação.
- Contato oficial, endereço e localização para adicionar à página.
- Periodicidade dos valores das salas e das duas opções de auditório.
- Capacidade do auditório, estrutura, agenda, antecedência de reserva e cancelamento.
- Versões finais dos termos: os documentos fornecidos têm campos ainda não preenchidos.
- Licença e autorização de uso das três fotografias fornecidas; são imagens ilustrativas, não retratos reais das instalações. Substituir por fotos reais quando disponíveis.

Os preços do auditório foram extraídos da seção final de valores do regulamento: R$ 2.500,00 sem caixa de som e R$ 3.500,00 com caixa de som, data show e assistente. Os campos provisórios anteriores não foram transformados em benefícios confirmados.

## Fontes

Material de `Documentos/Cowork`: os dois documentos DOCX, as três fotografias WEBP e o logo extraído da primeira página do PDF. Os documentos originais estão disponíveis para download na seção de condições. Não foram criados depoimentos, certificações, alegações de vigilância ou promessas comerciais.

## Verificação

Conferidas referências locais, âncoras, IDs e atributos descritivos/dimensões das imagens. O CSS inclui layouts para celular, tablet e desktop, foco visível e preferência de movimento reduzido. Não foi possível executar teste visual em navegador nem teste de JavaScript: este ambiente não dispõe de navegador ou Node.js. A publicação pelo fluxo Sites também depende do Node.js, ausente no ambiente; a entrega está salva localmente e não foi publicada.

Atualização: a seção de auditório utiliza `Documentos/Cowork/Auditorio.jpg`, copiada para `assets/auditorio.jpg`. A legenda e a FAQ distinguem essa fotografia das imagens ilustrativas.

Ajuste visual: fotos com altura natural e proporções originais, sem ampliação por recortes verticais; foto inicial limitada a 500 pixels e retrato a 280 pixels (230 em telas menores). Espaçamento entre seções reduzido e checklist de contratação adicionado ao lado do formulário. Os originais têm resolução limitada; nenhuma reconstrução artificial de detalhes foi aplicada. Verificação visual em navegador continua indisponível.
