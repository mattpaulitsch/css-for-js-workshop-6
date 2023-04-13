import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
    const sourceSet = src + " 1x,"
                             + src.replace(".jpg", "@2x.jpg 2x, ")
                             + src.replace(".jpg", "@3x.jpg 3x")
    const sourceSetAvif = src.replace(".jpg", ".avif 1x, ")
                          + src.replace(".jpg", "@2x.avif 2x, ")
                          + src.replace(".jpg", "@3x.avif 3x")

    return (
        <article>
            <Anchor href={`/photos/${id}`}>
                <picture>
                    <source
                        type="image/avif"
                        srcSet={sourceSetAvif}
                    />
                    <Image src={src} alt={alt} srcSet={sourceSet} />
                </picture>
            </Anchor>
            <Tags>
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
        </article>
    );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
`;

const Tags = styled.ul`
  display: inline;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  display: inline-block;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
  margin-top: 8px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
