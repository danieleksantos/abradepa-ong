import { DocumentTextIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Postagens do Blog',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Post',
      type: 'string',
      validation: (Rule) => Rule.required().error('O título é obrigatório'),
    }),
    defineField({
      name: 'slug',
      title: 'Link (URL)',
      type: 'slug',
      description:
        'Clique em "Generate" para criar o link automaticamente com base no título',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error(
          'O link (slug) é necessário para a página funcionar',
        ),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo / Descrição Curta',
      type: 'text',
      rows: 3,
      description: 'Este texto aparecerá no card da página principal do blog.',
      validation: (Rule) =>
        Rule.max(200).warning(
          'Tente manter o resumo abaixo de 200 caracteres para não quebrar o layout.',
        ),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo (Acessibilidade)',
          description:
            'Descreva brevemente a imagem para pessoas com deficiência visual.',
        }),
      ],
      validation: (Rule) =>
        Rule.required().error('Uma imagem de capa é essencial para o blog.'),
    }),
    defineField({
      name: 'categories',
      title: 'Categorias / Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo da Matéria',
      type: 'blockContent',
      description: 'Escreva aqui o texto completo da sua postagem.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `por ${author}` };
    },
  },
});
