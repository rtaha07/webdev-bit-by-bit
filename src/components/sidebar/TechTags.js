import React from "react"
import TechTag from "../tags/TechTag"

const TechTags = (props) => {
  const labels = props.labels
  const posts = props.posts

  const labelCount = labels.map((label) => {
    let count = 0
    posts.forEach((post) => {
      if (post.node.frontmatter.tags.includes(label.tag)) {
        count = count + 1
      }
    })
    return [label.tag, count]
  })

  const categories = labelCount.filter((label) => {
    return label[1] > 0
  })

  const tags = categories.map((category) => {
    return category[0]
  })

  const getTechTags = (tags) => {
    const techTags = []
    tags.forEach((tag, i) => {
      labels.forEach((label) => {
        if (tag === label.tag) {
          techTags.push(
            <TechTag
              key={i}
              tag={label.tag}
              tech={label.tech}
              name={label.name}
              size={label.size}
              color={label.color}
            />
          )
        }
      })
    })
    return techTags
  }

  return (
    <>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Tags</div>
      <div>{getTechTags(tags)}</div>
    </>
  )
}

export default TechTags
