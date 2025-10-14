  // ====================================
        // JAVASCRIPT: SIMULANDO O CARRINHO
        // ====================================

        document.addEventListener('DOMContentLoaded', () => {
            const botoesComprar = document.querySelectorAll('.btn-comprar');
            const notificacaoCarrinho = document.getElementById('notificacao-carrinho');

            botoesComprar.forEach(botao => {
                botao.addEventListener('click', (event) => {
                    const nomeJogo = event.target.getAttribute('data-nome-jogo');
                    
                    // 1. Atualiza a notificação
                    notificacaoCarrinho.textContent = `"${nomeJogo}" adicionado ao carrinho!`;
                    
                    // 2. Mostra a notificação
                    notificacaoCarrinho.style.display = 'block';
                    
                    // 3. Oculta a notificação após 3 segundos
                    setTimeout(() => {
                        notificacaoCarrinho.style.display = 'none';
                    }, 3000);

                    // Em um site real, aqui você enviaria uma requisição para o servidor 
                    // para realmente adicionar o item ao carrinho do usuário.
                    console.log(`Jogo adicionado (simulação): ${nomeJogo}`);
                });
            });
        });