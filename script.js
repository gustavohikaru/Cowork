/* Configure somente com os contatos oficiais confirmados. */
const CONTACT = { whatsapp: '', email: '' };
const form = document.querySelector('#briefing');
const space = document.querySelector('#space');
document.querySelectorAll('[data-space]').forEach(link => link.addEventListener('click', () => { space.value = link.dataset.space; }));
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const people = Number(document.querySelector('#people').value);
  const limit = space.value === 'Sala pequena' ? 20 : space.value === 'Sala grande' ? 30 : null;
  const date = document.querySelector('#date').value.split('-').reverse().join('/');
  const message = `Olá! Gostaria de consultar disponibilidade na Uniporá.\n\nEspaço: ${space.value}\nData desejada: ${date}\nParticipantes: ${people}\nFinalidade e horários: ${document.querySelector('#purpose').value.trim()}\n\nPor favor, confirmem a disponibilidade, o período de cobrança, o valor total, os itens inclusos e as condições de contratação e cancelamento.`;
  document.querySelector('#message').value = message;
  document.querySelector('#result').hidden = false;
  document.querySelector('#status').textContent = limit && people > limit ? `Atenção: o grupo excede a capacidade de ${limit} pessoas desta sala. Consulte outra opção com a administração.` : 'Mensagem preparada. Copie e encaminhe ao canal oficial da administração.';
  const send = document.querySelector('#send');
  if (/^[1-9]\d{9,14}$/.test(CONTACT.whatsapp)) { send.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`; send.hidden = false; }
  else if (CONTACT.email) { send.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Consulta de espaço — Uniporá')}&body=${encodeURIComponent(message)}`; send.hidden = false; }
  document.querySelector('#message').focus();
});
document.querySelector('#copy').addEventListener('click', async () => {
  const message = document.querySelector('#message');
  try { await navigator.clipboard.writeText(message.value); document.querySelector('#status').textContent = 'Mensagem copiada. Encaminhe ao canal oficial da administração.'; }
  catch { message.focus(); message.select(); document.querySelector('#status').textContent = 'Selecione e copie a mensagem com Ctrl+C ou pelo menu do seu dispositivo.'; }
});
