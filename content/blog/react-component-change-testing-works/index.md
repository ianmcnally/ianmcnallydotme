---
title: "React component change testing works!"
date: "2015-07-22"
---

Since I've been using React, there's been a [bug](http://ianmcnally.me/blog/2015/5/5/testing-input-change-in-react) in TestUtils.Simulate.change. I don't want to drag you down with the specifics of the bug, but I'm happy to announce it's been fixed! So, when I want to test that a user can input and change the value, I can write:

// Input.jsx
class Input extends React.Component {
    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    
    render() {
      return (
            <input ref\="email" type\="email" value\={this.state.email} onChange\={(event) \=> this.onEmailChange(event))} />
      );
    }
}

// InputSpec.js
it('sets its value on input change', () \=> {
    const newEmail \= 'abc123@gmail.com';
    const input \= component.refs.email;
    
    expect(input.props.value).not.to.equal(newEmail);

    Simulate.change(input, { target: { value: newEmail } });

    expect(input.props.value).to.equal(newEmail);
});

Yey for bug squashing and succinctness!
