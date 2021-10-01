import React, { memo } from "react";
import { PropTypes } from "prop-types";
import { createMarkup } from "../../source/util";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";

function Economy({ values }) {
  const history = useHistory();
  const renderImg = ({ image, description }) => (
    <img src={image.url} alt={description} width="100%" />
  );
  const renderDescription = (description) => (
    <p dangerouslySetInnerHTML={createMarkup(description)}></p>
  );
  const openPost = (id) => {
    history.push(`/economy/${id}`);
  };
  const renderPost = (post, index) => {
    const { title, image, description, id } = post;
    return (
      <Col span={24} md={12} key={`post-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)}></strong>
          </p>
          {image?.url
            ? renderImg({ image, description })
            : renderDescription(description)}
        </article>
      </Col>
    );
  };
  return <Row>{values?.map(renderPost)}</Row>;
}

Economy.defaultProps = {
  values: [],
};
Economy.propTypes = {
  values: PropTypes.array.isRequired,
};

export default memo(Economy);
