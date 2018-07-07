import React, { Component } from 'react';
import { View, RefreshControl, FlatList } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as itemsActions from './items.actions';
import CardItens from './components/cardItens';
import ProgressBar from '../_global/ProgressBar';
import reset from '../../css/reset';

class ItemsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			isLoading: true,
			isRefreshing: false,
			loadMore: false
		};
	}

	componentWillMount() {
		this._itemsList();
	}

	_itemsList(isRefreshed) {
		this.setState({
			currentPage: 1,
		 }, () => {
			this.props.actions.itemsList(this.state.currentPage)
			.then(() => {
				this.setState({
					list: this.props.list.data,
					isLoading: false
				});
			});
			if (isRefreshed && this.setState({ isRefreshing: false }));
		 });
	}

	_onRefresh = () => {
		this.setState({isRefreshing: true});
		this._itemsList('isRefreshed');
	}

	onScrollHandler = () => {
		if (this.state.currentPage !== this.props.list.last_page) {
			if (this.state.list.length < this.props.list.total) {
				this.setState({
					currentPage: this.state.currentPage + 1,
					loadMore: true
				 }, () => {
					this.props.actions.itemsList(this.state.currentPage)
						.then(() => {
							const data = [...this.state.list, ...this.props.list.data];
							this.setState({
								list: data,
								loadMore: false
							});
						});
				 });
			}
		}
	}
	
	_keyExtractor = (item, index) =>  `${item.id}`;

	render() {
		return (
			this.state.isLoading ? <View style={reset.styles.progressBar}><ProgressBar /></View> :
			<FlatList
			ListEmptyComponent
			keyExtractor={this._keyExtractor}
			onEndReached={this.onScrollHandler}
			data={this.state.list}
			renderItem={ ({item}) => <CardItens item={item} navigator={this.props.navigator}/>}
			ListFooterComponent={() => this.state.loadMore ? <View style={{ height: 50 }}><ProgressBar /></View> : <View/>}
			refreshControl={
				<RefreshControl
					refreshing={this.state.isRefreshing}
					onRefresh={this._onRefresh}
					colors={[reset.color.default]}
					tintColor="white"
					title="loading..."
					titleColor="white"
					progressBackgroundColor="white"
				/>
			}
			/>
		);
	}
}

const mapStateToProps = state => {
    return {
		list: state.items.list
	};
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(itemsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);