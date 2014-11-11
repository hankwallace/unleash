var React = require('react');

var Feature = React.createClass({
    onChange: function(event) {
        this.props.onChange({
            name: this.props.feature.name,
            field: 'enabled',
            value: event.target.checked
        });
    },

    render: function() {
        return (
            <div className='line mal'>
                <div className='unit r-size1of5'>
                    <input type='checkbox' checked={this.props.feature.enabled} onChange={this.onChange} />
                </div>

                <div className='unit r-size1of5'>
                  {this.props.feature.name}
                </div>

                <div className='unit r-size2of5 opaque smalltext truncate'>
                  {this.props.feature.description || '\u00a0'}
                </div>

                <div className='unit'>
                    {this.props.feature.strategy}
                </div>
            </div>
        );
    }
});

module.exports = Feature;