
import { ref } from 'vue'

const produtos = ref ([
 {
   "id": 1,
   "titulo": "Clean Code",
   "autor": "Robert C. Martin",
   "resenha": "Um livro sobre boas práticas de programação, escrita de código limpo e melhoria da qualidade de software.",
   "preco": 129.9,
   "capa": "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
 },
 {
   "id": 2,
   "titulo": "The Pragmatic Programmer",
   "autor": "Andrew Hunt e David Thomas",
   "resenha": "Uma obra clássica sobre postura profissional, organização e boas práticas no desenvolvimento de software.",
   "preco": 149.9,
   "capa": "https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg"
 },
 {
   "id": 3,
   "titulo": "Eloquent JavaScript",
   "autor": "Marijn Haverbeke",
   "resenha": "Uma introdução prática à linguagem JavaScript, com exemplos e conceitos fundamentais para desenvolvimento web.",
   "preco": 89.9,
   "capa": "https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg"
 },
 {
   "id": 4,
   "titulo": "You Don't Know JS Yet",
   "autor": "Kyle Simpson",
   "resenha": "Livro voltado ao aprofundamento dos principais conceitos da linguagem JavaScript.",
   "preco": 79.9,
   "capa": "https://covers.openlibrary.org/b/isbn/9781091210092-L.jpg"
 },
 {
   "id": 5,
   "titulo": "Design Patterns",
   "autor": "Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides",
   "resenha": "Livro clássico sobre padrões de projeto e soluções reutilizáveis para problemas comuns de software.",
   "preco": 159.9,
   "capa": "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg"
 },
 {
   "id": 6,
   "titulo": "Introduction to Algorithms",
   "autor": "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest e Clifford Stein",
   "resenha": "Referência ampla sobre algoritmos, estruturas de dados e análise de complexidade.",
   "preco": 199.9,
   "capa": "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg"
 },
 {
   "id": 7,
   "titulo": "Refactoring",
   "autor": "Martin Fowler",
   "resenha": "Apresenta técnicas para melhorar a estrutura interna do código sem alterar seu comportamento externo.",
   "preco": 139.9,
   "capa": "https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg"
 },
 {
   "id": 8,
   "titulo": "HTML and CSS",
   "autor": "Jon Duckett",
   "resenha": "Livro introdutório e visual sobre construção de páginas web com HTML e CSS.",
   "preco": 99.9,
   "capa": "https://covers.openlibrary.org/b/isbn/9781118008188-L.jpg"
 },
 {
   "id": 9,
   "titulo": "O Extraordinário",
   "autor": "R. J. Palacio",
   "resenha": "Uma emocionante história sobre amizade, empatia e superação através da vida de um garoto diferente dos demais.",
   "preco": 68.99,
   "capa": "https://upload.wikimedia.org/wikipedia/pt/e/e2/Wonder_%28romance%29.png?_=20170104180033"
 },
 {
   "id": 10,
   "titulo": "Dom casmurro",
   "autor": "Mchado de Assis",
   "resenha": "Clássico da literatura brasileira que explora amor, ciúmes e dúvidas na narrativa marcante de Bentinho.",
   "preco": 25.99,
   "capa": "https://m.media-amazon.com/images/I/61x1ZHomWUL._AC_UF1000,1000_QL80_.jpg"
 },
 {
   "id": 11,
   "titulo": "Malala, a menina que queria ir escola",
   "autor": "Adriana Carranca",
   "resenha": "Relato inspirador sobre a luta de Malala pelo direito das meninas à educação em meio às dificuldades enfrentadas em seu país.",
   "preco": 67.90,
   "capa": "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788574066707/malala-a-menina-que-queria-ir-para-a-escola.jpg"
 },
 {
   "id": 12,
   "titulo": "Demon Slayer 1",
   "autor": "Koyoharu Gotouge",
   "resenha": "O início da aventura de Tanjiro em busca de salvar sua irmã e enfrentar perigosos demônios.",
   "preco": 40.00,
   "capa": "https://http2.mlstatic.com/D_NQ_NP_2X_802106-MLA82482519553_022025-F.webp"
 },
 {
   "id": 13,
   "titulo": "Biblioteca da meia-noite",
   "autor": "Matt Halg",
   "resenha": "Uma história emocionante sobre escolhas, arrependimentos e as infinitas possibilidades da vida.",
   "preco": 59.99,
   "capa": "https://http2.mlstatic.com/D_NQ_NP_2X_804652-MLU50455342325_062022-F.webp"
 },
 {
   "id": 14,
   "titulo": "Authentic Games, A batalha da Torre!",
   "autor": "Marco Tulio",
   "resenha": "Authentic Games e seus amigos enfrentam novos desafios e batalhas eletrizantes em uma grande aventura.",
   "preco": 49.99,
   "capa": "https://http2.mlstatic.com/D_NQ_NP_2X_680963-MLU50455611567_062022-F.webp"
 },
 {
   "id": 15,
   "titulo": "Authentic Games, A batalha contra herobrine",
   "autor": "Marco Tulio",
   "resenha": "Uma aventura cheia de ação em que Authentic Games enfrenta o poderoso Herobrine para salvar o mundo.",
   "preco": 49.99,
   "capa": "https://http2.mlstatic.com/D_NQ_NP_2X_845406-MLU50455298900_062022-F.webp"
 },
 {
   "id": 16,
   "titulo": "Authentic Games, A batalha contra Ender Dragon",
   "autor": "Marco Tulio",
   "resenha": "Authentic Games embarca em uma batalha épica contra o Ender Dragon em mais uma aventura inspirada no universo Minecraft.",
   "preco": 49.99,
   "capa": "https://http2.mlstatic.com/D_NQ_NP_2X_928164-MLU74220095109_012024-F.webp"
 },
 {
   "id": 17,
   "titulo": "Box Divergente (4 Volumes), ",
   "autor": "Veronica Roth",
   "resenha": "Coleção completa da série Divergente, trazendo ação, romance e conflitos em uma sociedade dividida por facções.",
   "preco": 399.90,
   "capa": "https://http2.mlstatic.com/D_NQ_NP_2X_792610-MLU77450206629_072024-F.webp"
 },
 {
   "id": 18,
   "titulo": "Assassinato No Expresso Do Oriente",
   "autor": "Agatha Christie",
   "resenha": "Um dos maiores clássicos do suspense policial, onde Hercule Poirot investiga um misterioso assassinato em um trem.",
   "preco": 42.76,
   "capa": "https://http2.mlstatic.com/D_NQ_NP_2X_671861-MLA109213731514_042026-F.webp"
 },
 {
   "id": 19,
   "titulo": " A Hora Da Estrela",
   "autor": "Clarise Lispector",
   "resenha": "Clássico de Clarice Lispector que retrata de forma sensível e profunda a vida simples de Macabéa.",
   "preco": 44.99,
   "capa": "https://http2.mlstatic.com/D_NQ_NP_2X_985891-MLU75934012837_042024-F.webp"
 },
])


export default produtos;
