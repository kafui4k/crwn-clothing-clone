import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {isSelectCollectionsLoaded} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/withSpinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !isSelectCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;
