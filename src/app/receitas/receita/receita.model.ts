export interface Receita {
  id_receita: number;
  nome: string;
  descricao: string;
  ingrediente: string;
  preparo: string;
  avaliacao: number;
  imagem: string;
  categoria_id: number;
}
