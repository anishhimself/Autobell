/*
 *
 * Newsletter
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class Newsletter extends React.PureComponent {
  render() {
    const {
      email,
      newsletterChange,
      subscribeToNewsletter,
      formErrors
    } = this.props;

    const SubscribeButton = (
      <Button type='submit' variant='primary' text='Subscribe' />
    );

    const handleSubmit = event => {
      event.preventDefault();
      subscribeToNewsletter();
    };

    return (
<p>&#x2192; No returns after Delivery</p>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.newsletter.email,
    formErrors: state.newsletter.formErrors
  };
};

export default connect(mapStateToProps, actions)(Newsletter);
