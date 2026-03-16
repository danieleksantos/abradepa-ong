import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Produtos da Loja',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Produto',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('O nome do produto é obrigatório'),
    }),
    defineField({
      name: 'price',
      title: 'Preço (R$)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
      description: 'Breve resumo que aparece no card da loja.',
    }),
    defineField({
      name: 'image',
      title: 'Imagem do Produto',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) =>
        Rule.required().error('A imagem é obrigatória para a loja.'),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Vestuário', value: 'Vestuário' },
          { title: 'Acessórios', value: 'Acessórios' },
          { title: 'Outros', value: 'Outros' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `R$ ${subtitle}` : '',
        media,
      };
    },
  },
});
