document.addEventListener('DOMContentLoaded', () => {
  const hintBtn = document.getElementById('hintBtn');
  const answerBtn = document.getElementById('answerBtn');
  const chatBox = document.getElementById('chatBox');
  const chatInput = document.getElementById('chatInput');
  const sendChat = document.getElementById('sendChat');

  const hints = [
    'Coba pikirkan: program perlu mengulang dari 1 sampai 5. Bagian mana yang menentukan awal dan akhir loop?',
    'Kamu bisa memakai loop for. Gunakan kondisi i <= 5 agar angka berhenti di 5.',
    'Ingat: variabel i harus bertambah setiap kali iterasi, biasanya i++.'
  ];

  let hintIndex = 0;

  hintBtn.addEventListener('click', () => {
    const message = document.createElement('div');
    message.className = 'message ai';
    message.innerHTML = `<strong>AI Tutor</strong><p>${hints[hintIndex % hints.length]}</p>`;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
    hintIndex += 1;
  });

  sendChat.addEventListener('click', () => {
    const value = chatInput.value.trim();
    if (!value) return;

    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `<strong>Siswa</strong><p>${value}</p>`;
    chatBox.appendChild(userMessage);

    const aiReply = document.createElement('div');
    aiReply.className = 'message ai';
    aiReply.innerHTML = `<strong>AI Tutor</strong><p>Bagus! Coba fokus pada dua hal: nilai awal i dan kondisi akhir loop. Apakah kamu sudah mencoba i = 1 dan i <= 5?</p>`;
    chatBox.appendChild(aiReply);

    chatInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  });

  answerBtn.addEventListener('click', () => {
    const editor = document.getElementById('codeEditor');
    const current = editor.value.trim();

    if (current.includes('for') && current.includes('i <= 5') && current.includes('console.log')) {
      const result = document.createElement('div');
      result.className = 'message ai';
      result.innerHTML = `<strong>AI Tutor</strong><p>Jawaban kamu sudah benar! Kamu sudah memahami pola perulangan dan kondisi penghentian loop.</p>`;
      chatBox.appendChild(result);
      chatBox.scrollTop = chatBox.scrollHeight;
    } else {
      const result = document.createElement('div');
      result.className = 'message ai';
      result.innerHTML = `<strong>AI Tutor</strong><p>Hampir benar. Coba periksa kembali kondisi loop agar angka berhenti di 5 dan tetap bertambah setiap iterasi.</p>`;
      chatBox.appendChild(result);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });
});
