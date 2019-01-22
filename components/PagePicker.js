import React, { Component } from 'react'
import { parse } from 'query-string'
import Link from 'next/link'
import styled from 'styled-components'

const PagePickerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-family: 'Gloria Hallelujah', cursive;
    background: orange;
    padding: 1rem;
    margin: 0 10px;
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

class PagePicker extends React.Component {
  render() {
    const page = parse(this.props.page);
    const pageNum = parseInt(page.page) ? parseInt(page.page) : 1;

    return (
      <PagePickerStyles>
        <Link href={{
          pathname: '/characters',
          query: {page: pageNum - 1}
        }}>
          <a className='button' aria-disabled={pageNum <= 1}>Prev</a>
        </Link>
        <p>page {pageNum} of {this.props.pageCount}</p>
        <Link href={{
          pathname: '/characters',
          query: {page: pageNum + 1}
        }}>
          <a className='button' aria-disabled={pageNum >= this.props.pageCount}>Next</a>
        </Link>
      </PagePickerStyles>
    )
  }
}

export default PagePicker
