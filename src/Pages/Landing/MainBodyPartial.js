import React, { Component } from 'react';

class MainBodyPartial extends Component {
  render() {
    return (
	<div className="m-grid__item m-grid__item--fluid m-wrapper">
		{/* BEGIN: Subheader */}
		<div className="m-subheader ">
			<div className="d-flex align-items-center">
				<div className="mr-auto">
					<h3 className="m-subheader__title ">
						Dashboard
					</h3>
				</div>
				<div>
					<span className="m-subheader__daterange" id="m_dashboard_daterangepicker">
						<span className="m-subheader__daterange-label">
							<span className="m-subheader__daterange-title"></span>
							<span className="m-subheader__daterange-date m--font-brand"></span>
						</span>
						<a href="#" className="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
							<i className="la la-angle-down"></i>
						</a>
					</span>
				</div>
			</div>
		</div>
		{/* END: Subheader */}
		<div className="m-content">
			{/*Begin::Main Portlet*/}
			<div className="row">
				<div className="col-xl-4">
					{/*begin:: Widgets/Top Products*/}
					<div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Trends
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover" aria-expanded="true">
										<a href="#" className="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">
											All
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style={{left: 'auto', right: '36.5px'}}></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">
																		Activity
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">
																		Messages
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">
																		FAQ
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">
																		Support
																	</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							{/*begin::Widget5*/}
							<div className="m-widget4">
								<div className="m-widget4__chart m-portlet-fit--sides m--margin-top-10 m--margin-top-20" style={{height:'260px'}}>
									<canvas id="m_chart_trends_stats"></canvas>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo3.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											Phyton
										</span>
										<br/>
										<span className="m-widget4__sub">
											A Programming Language
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-danger">
											+$17
										</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo1.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											FlyThemes
										</span>
										<br/>
										<span className="m-widget4__sub">
											A Let's Fly Fast Again Language
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-danger">
											+$300
										</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo2.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											AirApp
										</span>
										<br/>
										<span className="m-widget4__sub">
											Awesome App For Project Management
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-danger">
											+$6700
										</span>
									</span>
								</div>
							</div>
							{/*end::Widget 5*/}
						</div>
					</div>
					{/*end:: Widgets/Top Products*/}
				</div>
				<div className="col-xl-4">
					{/*begin:: Widgets/Activity*/}
					<div className="m-portlet m-portlet--bordered-semi m-portlet--widget-fit m-portlet--full-height m-portlet--skin-light ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text m--font-light">
										Activity
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
										<a href="#" className="m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl">
											<i className="fa fa-genderless m--font-light"></i>
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__section m-nav__section--first">
																<span className="m-nav__section-text">
																	Quick Actions
																</span>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">
																		Activity
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">
																		Messages
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">
																		FAQ
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">
																		Support
																	</span>
																</a>
															</li>
															<li className="m-nav__separator m-nav__separator--fit"></li>
															<li className="m-nav__item">
																<a href="#" className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">
																	Cancel
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="m-widget17">
								<div className="m-widget17__visual m-widget17__visual--chart m-portlet-fit--top m-portlet-fit--sides m--bg-danger">
									<div className="m-widget17__chart" style={{height:'320px'}}>
										<canvas id="m_chart_activities"></canvas>
									</div>
								</div>
								<div className="m-widget17__stats">
									<div className="m-widget17__items m-widget17__items-col1">
										<div className="m-widget17__item">
											<span className="m-widget17__icon">
												<i className="flaticon-truck m--font-brand"></i>
											</span>
											<span className="m-widget17__subtitle">
												Delivered
											</span>
											<span className="m-widget17__desc">
												15 New Paskages
											</span>
										</div>
										<div className="m-widget17__item">
											<span className="m-widget17__icon">
												<i className="flaticon-paper-plane m--font-info"></i>
											</span>
											<span className="m-widget17__subtitle">
												Reporeted
											</span>
											<span className="m-widget17__desc">
												72 Support Cases
											</span>
										</div>
									</div>
									<div className="m-widget17__items m-widget17__items-col2">
										<div className="m-widget17__item">
											<span className="m-widget17__icon">
												<i className="flaticon-pie-chart m--font-success"></i>
											</span>
											<span className="m-widget17__subtitle">
												Ordered
											</span>
											<span className="m-widget17__desc">
												72 New Items
											</span>
										</div>
										<div className="m-widget17__item">
											<span className="m-widget17__icon">
												<i className="flaticon-time m--font-danger"></i>
											</span>
											<span className="m-widget17__subtitle">
												Arrived
											</span>
											<span className="m-widget17__desc">
												34 Upgraded Boxes
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*end:: Widgets/Activity*/}
				</div>
				<div className="col-xl-4">
					{/*begin:: Widgets/Blog*/}
					<div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
						<div className="m-portlet__head m-portlet__head--fit">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-action">
									<button type="button" className="btn btn-sm m-btn--pill  btn-brand">
										Blog
									</button>
								</div>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="m-widget19">
								<div className="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides" style={{minHeight: '286px'}}>
									<img src="assets/app/media/img/blog/blog1.jpg" alt="" />
									<h3 className="m-widget19__title m--font-light">
										Introducing New Feature
									</h3>
									<div className="m-widget19__shadow"></div>
								</div>
								<div className="m-widget19__content">
									<div className="m-widget19__header">
										<div className="m-widget19__user-img">
											<img className="m-widget19__img" src="assets/app/media/img/users/user1.jpg" alt="" />
										</div>
										<div className="m-widget19__info">
											<span className="m-widget19__username">
												Anna Krox
											</span>
											<br/>
											<span className="m-widget19__time">
												UX/UI Designer, Google
											</span>
										</div>
										<div className="m-widget19__stats">
											<span className="m-widget19__number m--font-brand">
												18
											</span>
											<span className="m-widget19__comment">
												Comments
											</span>
										</div>
									</div>
									<div className="m-widget19__body">
										Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.
									</div>
								</div>
								<div className="m-widget19__action">
									<button type="button" className="btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom">
										Read More
									</button>
								</div>
							</div>
						</div>
					</div>
					{/*end:: Widgets/Blog*/}
				</div>
			</div>
			{/*End::Main Portlet*/}
			{/*Begin::Main Portlet*/}
			<div className="m-portlet">
				<div className="m-portlet__body  m-portlet__body--no-padding">
					<div className="row m-row--no-padding m-row--col-separator-xl">
						<div className="col-xl-4">
							{/*begin:: Widgets/Stats2-1 */}
							<div className="m-widget1">
								<div className="m-widget1__item">
									<div className="row m-row--no-padding align-items-center">
										<div className="col">
											<h3 className="m-widget1__title">
												Member Profit
											</h3>
											<span className="m-widget1__desc">
												Awerage Weekly Profit
											</span>
										</div>
										<div className="col m--align-right">
											<span className="m-widget1__number m--font-brand">
												+$17,800
											</span>
										</div>
									</div>
								</div>
								<div className="m-widget1__item">
									<div className="row m-row--no-padding align-items-center">
										<div className="col">
											<h3 className="m-widget1__title">
												Orders
											</h3>
											<span className="m-widget1__desc">
												Weekly Customer Orders
											</span>
										</div>
										<div className="col m--align-right">
											<span className="m-widget1__number m--font-danger">
												+1,800
											</span>
										</div>
									</div>
								</div>
								<div className="m-widget1__item">
									<div className="row m-row--no-padding align-items-center">
										<div className="col">
											<h3 className="m-widget1__title">
												Issue Reports
											</h3>
											<span className="m-widget1__desc">
												System bugs and issues
											</span>
										</div>
										<div className="col m--align-right">
											<span className="m-widget1__number m--font-success">
												-27,49%
											</span>
										</div>
									</div>
								</div>
							</div>
							{/*end:: Widgets/Stats2-1 */}
						</div>
						<div className="col-xl-4">
							{/*begin:: Widgets/Daily Sales*/}
							<div className="m-widget14">
								<div className="m-widget14__header m--margin-bottom-30">
									<h3 className="m-widget14__title">
										Daily Sales
									</h3>
									<span className="m-widget14__desc">
										Check out each collumn for more details
									</span>
								</div>
								<div className="m-widget14__chart" style={{height:'120px'}}>
									<canvas  id="m_chart_daily_sales"></canvas>
								</div>
							</div>
							{/*end:: Widgets/Daily Sales*/}
						</div>
						<div className="col-xl-4">
							{/*begin:: Widgets/Profit Share*/}
							<div className="m-widget14">
								<div className="m-widget14__header">
									<h3 className="m-widget14__title">
										Profit Share
									</h3>
									<span className="m-widget14__desc">
										Profit Share between customers
									</span>
								</div>
								<div className="row  align-items-center">
									<div className="col">
										<div id="m_chart_profit_share" className="m-widget14__chart" style={{height: '160px'}}>
											<div className="m-widget14__stat">
												45
											</div>
										</div>
									</div>
									<div className="col">
										<div className="m-widget14__legends">
											<div className="m-widget14__legend">
												<span className="m-widget14__legend-bullet m--bg-accent"></span>
												<span className="m-widget14__legend-text">
													37% Sport Tickets
												</span>
											</div>
											<div className="m-widget14__legend">
												<span className="m-widget14__legend-bullet m--bg-warning"></span>
												<span className="m-widget14__legend-text">
													47% Business Events
												</span>
											</div>
											<div className="m-widget14__legend">
												<span className="m-widget14__legend-bullet m--bg-brand"></span>
												<span className="m-widget14__legend-text">
													19% Others
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*end:: Widgets/Profit Share*/}
						</div>
					</div>
				</div>
			</div>
			{/*End::Main Portlet*/}
			{/*Begin::Main Portlet*/}
			<div className="row">
				<div className="col-xl-12">
					{/*begin::Portlet*/}
					<div className="m-portlet" id="m_portlet">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<span className="m-portlet__head-icon">
										<i className="flaticon-map-location"></i>
									</span>
									<h3 className="m-portlet__head-text">
										Calendar
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item">
										<a href="#" className="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--pill m-btn--air">
											<span>
												<i className="la la-plus"></i>
												<span>
													Add Event
												</span>
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div id="m_calendar"></div>
						</div>
					</div>
					{/*end::Portlet*/}
				</div>
			</div>
			{/*End::Main Portlet*/}
			{/*Begin::Main Portlet*/}
			<div className="row">
				<div className="col-xl-6">
					{/*begin:: Widgets/Tasks */}
					<div className="m-portlet m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Tasks
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm" role="tablist">
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_widget2_tab1_content" role="tab">
											Today
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget2_tab2_content1" role="tab">
											Week
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget2_tab3_content1" role="tab">
											Month
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="tab-content">
								<div className="tab-pane active" id="m_widget2_tab1_content">
									<div className="m-widget2">
										<div className="m-widget2__item m-widget2__item--primary">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox" />
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Bob
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">
																						Activity
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">
																						Messages
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">
																						FAQ
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">
																						Support
																					</span>
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="m-widget2__item m-widget2__item--warning">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox" />
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Prepare Docs For Metting On Monday
												</span>
												<br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Sean
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">
																						Activity
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">
																						Messages
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">
																						FAQ
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">
																						Support
																					</span>
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="m-widget2__item m-widget2__item--brand">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox" />
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Make Widgets Great Again.Estudiat Communy Elit
												</span>
												<br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Aziko
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">
																						Activity
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">
																						Messages
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">
																						FAQ
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">
																						Support
																					</span>
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="m-widget2__item m-widget2__item--success">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox" />
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Make Metronic Great Again.Lorem Ipsum
												</span>
												<br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By James
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">
																						Activity
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">
																						Messages
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">
																						FAQ
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">
																						Support
																					</span>
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="m-widget2__item m-widget2__item--danger">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox" />
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Completa Financial Report For Emirates Airlines
												</span>
												<br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Bob
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">
																						Activity
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">
																						Messages
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">
																						FAQ
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">
																						Support
																					</span>
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="m-widget2__item m-widget2__item--info">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox" />
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Completa Financial Report For Emirates Airlines
												</span>
												<br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Sean
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">
																						Activity
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">
																						Messages
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">
																						FAQ
																					</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="#" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">
																						Support
																					</span>
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane" id="m_widget2_tab2_content"></div>
								<div className="tab-pane" id="m_widget2_tab3_content"></div>
							</div>
						</div>
					</div>
					{/*end:: Widgets/Tasks */}
				</div>
				<div className="col-xl-6">
					{/*begin:: Widgets/Support Tickets */}
					<div className="m-portlet m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Support Tickets
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover" aria-expanded="true">
										<a href="#" className="m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle">
											<i className="la la-ellipsis-h m--font-brand"></i>
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">
																		Activity
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">
																		Messages
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">
																		FAQ
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">
																		Support
																	</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="m-widget3">
								<div className="m-widget3__item">
									<div className="m-widget3__header">
										<div className="m-widget3__user-img">
											<img className="m-widget3__img" src="assets/app/media/img/users/user1.jpg" alt="" />
										</div>
										<div className="m-widget3__info">
											<span className="m-widget3__username">
												Melania Trump
											</span>
											<br/>
											<span className="m-widget3__time">
												2 day ago
											</span>
										</div>
										<span className="m-widget3__status m--font-info">
											Pending
										</span>
									</div>
									<div className="m-widget3__body">
										<p className="m-widget3__text">
											Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.
										</p>
									</div>
								</div>
								<div className="m-widget3__item">
									<div className="m-widget3__header">
										<div className="m-widget3__user-img">
											<img className="m-widget3__img" src="assets/app/media/img/users/user4.jpg" alt="" />
										</div>
										<div className="m-widget3__info">
											<span className="m-widget3__username">
												Lebron King James
											</span>
											<br/>
											<span className="m-widget3__time">
												1 day ago
											</span>
										</div>
										<span className="m-widget3__status m--font-brand">
											Open
										</span>
									</div>
									<div className="m-widget3__body">
										<p className="m-widget3__text">
											Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper.
										</p>
									</div>
								</div>
								<div className="m-widget3__item">
									<div className="m-widget3__header">
										<div className="m-widget3__user-img">
											<img className="m-widget3__img" src="assets/app/media/img/users/user5.jpg" alt="" />
										</div>
										<div className="m-widget3__info">
											<span className="m-widget3__username">
												Deb Gibson
											</span>
											<br/>
											<span className="m-widget3__time">
												3 weeks ago
											</span>
										</div>
										<span className="m-widget3__status m--font-success">
											Closed
										</span>
									</div>
									<div className="m-widget3__body">
										<p className="m-widget3__text">
											Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*end:: Widgets/Support Tickets */}
				</div>
			</div>
			{/*End::Main Portlet*/}
			{/*Begin::Main Portlet*/}
			<div className="row">
				<div className="col-xl-8">
					<div className="m-portlet m-portlet--mobile ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Exclusive Datatable Plugin
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item">
										<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover" aria-expanded="true">
											<a href="#" className="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle">
												<i className="la la-ellipsis-h m--font-brand"></i>
											</a>
											<div className="m-dropdown__wrapper">
												<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
												<div className="m-dropdown__inner">
													<div className="m-dropdown__body">
														<div className="m-dropdown__content">
															<ul className="m-nav">
																<li className="m-nav__section m-nav__section--first">
																	<span className="m-nav__section-text">
																		Quick Actions
																	</span>
																</li>
																<li className="m-nav__item">
																	<a href="#" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-share"></i>
																		<span className="m-nav__link-text">
																			Create Post
																		</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="#" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-chat-1"></i>
																		<span className="m-nav__link-text">
																			Send Messages
																		</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="#" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-multimedia-2"></i>
																		<span className="m-nav__link-text">
																			Upload File
																		</span>
																	</a>
																</li>
																<li className="m-nav__section">
																	<span className="m-nav__section-text">
																		Useful Links
																	</span>
																</li>
																<li className="m-nav__item">
																	<a href="#" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-info"></i>
																		<span className="m-nav__link-text">
																			FAQ
																		</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="#" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																		<span className="m-nav__link-text">
																			Support
																		</span>
																	</a>
																</li>
																<li className="m-nav__separator m-nav__separator--fit m--hide"></li>
																<li className="m-nav__item m--hide">
																	<a href="#" className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">
																		Submit
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							{/*begin: Datatable */}
							<div className="m_datatable" id="m_datatable_latest_orders"></div>
							{/*end: Datatable */}
						</div>
					</div>
				</div>
				<div className="col-xl-4">
					{/*begin:: Widgets/Audit Log*/}
					<div className="m-portlet m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Audit Log
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm" role="tablist">
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_widget4_tab1_content" role="tab">
											Today
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget4_tab2_content" role="tab">
											Week
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget4_tab3_content" role="tab">
											Month
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="tab-content">
								<div className="tab-pane active" id="m_widget4_tab1_content">
									<div className="m-scrollable" data-scrollable="true" data-max-height="400" style={{height: '400px', overflow: 'hidden'}}>
										<div className="m-list-timeline m-list-timeline--skin-light">
											<div className="m-list-timeline__items">
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--success"></span>
													<span className="m-list-timeline__text">
														12 new users registered
													</span>
													<span className="m-list-timeline__time">
														Just now
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--info"></span>
													<span className="m-list-timeline__text">
														System shutdown
														<span className="m-badge m-badge--success m-badge--wide">
															pending
														</span>
													</span>
													<span className="m-list-timeline__time">
														14 mins
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--danger"></span>
													<span className="m-list-timeline__text">
														New invoice received
													</span>
													<span className="m-list-timeline__time">
														20 mins
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--accent"></span>
													<span className="m-list-timeline__text">
														DB overloaded 80%
														<span className="m-badge m-badge--info m-badge--wide">
															settled
														</span>
													</span>
													<span className="m-list-timeline__time">
														1 hr
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--warning"></span>
													<span className="m-list-timeline__text">
														System error -
														<a href="#" className="m-link">
															Check
														</a>
													</span>
													<span className="m-list-timeline__time">
														2 hrs
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--brand"></span>
													<span className="m-list-timeline__text">
														Production server down
													</span>
													<span className="m-list-timeline__time">
														3 hrs
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--info"></span>
													<span className="m-list-timeline__text">
														Production server up
													</span>
													<span className="m-list-timeline__time">
														5 hrs
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--success"></span>
													<span href="#" className="m-list-timeline__text">
														New order received
														<span className="m-badge m-badge--danger m-badge--wide">
															urgent
														</span>
													</span>
													<span className="m-list-timeline__time">
														7 hrs
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--success"></span>
													<span className="m-list-timeline__text">
														12 new users registered
													</span>
													<span className="m-list-timeline__time">
														Just now
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--info"></span>
													<span className="m-list-timeline__text">
														System shutdown
														<span className="m-badge m-badge--success m-badge--wide">
															pending
														</span>
													</span>
													<span className="m-list-timeline__time">
														14 mins
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--danger"></span>
													<span className="m-list-timeline__text">
														New invoice received
													</span>
													<span className="m-list-timeline__time">
														20 mins
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--accent"></span>
													<span className="m-list-timeline__text">
														DB overloaded 80%
														<span className="m-badge m-badge--info m-badge--wide">
															settled
														</span>
													</span>
													<span className="m-list-timeline__time">
														1 hr
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--danger"></span>
													<span className="m-list-timeline__text">
														New invoice received
													</span>
													<span className="m-list-timeline__time">
														20 mins
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--accent"></span>
													<span className="m-list-timeline__text">
														DB overloaded 80%
														<span className="m-badge m-badge--info m-badge--wide">
															settled
														</span>
													</span>
													<span className="m-list-timeline__time">
														1 hr
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--warning"></span>
													<span className="m-list-timeline__text">
														System error -
														<a href="#" className="m-link">
															Check
														</a>
													</span>
													<span className="m-list-timeline__time">
														2 hrs
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--brand"></span>
													<span className="m-list-timeline__text">
														Production server down
													</span>
													<span className="m-list-timeline__time">
														3 hrs
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--info"></span>
													<span className="m-list-timeline__text">
														Production server up
													</span>
													<span className="m-list-timeline__time">
														5 hrs
													</span>
												</div>
												<div className="m-list-timeline__item">
													<span className="m-list-timeline__badge m-list-timeline__badge--success"></span>
													<span href="#" className="m-list-timeline__text">
														New order received
														<span className="m-badge m-badge--danger m-badge--wide">
															urgent
														</span>
													</span>
													<span className="m-list-timeline__time">
														7 hrs
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane" id="m_widget4_tab2_content"></div>
								<div className="tab-pane" id="m_widget4_tab3_content"></div>
							</div>
						</div>
					</div>
					{/*end:: Widgets/Audit Log*/}
				</div>
			</div>
			{/*End::Main Portlet*/}
			{/*Begin::Main Portlet*/}
			<div className="row">
				<div className="col-xl-4">
					{/*begin:: Widgets/Sales Stats*/}
					<div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Sales Stats
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-portlet__nav-item--last m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
										<a href="#" className="m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl">
											<i className="fa fa-genderless m--font-brand"></i>
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__section m-nav__section--first">
																<span className="m-nav__section-text">
																	Quick Actions
																</span>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">
																		Activity
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">
																		Messages
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">
																		FAQ
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">
																		Support
																	</span>
																</a>
															</li>
															<li className="m-nav__separator m-nav__separator--fit"></li>
															<li className="m-nav__item">
																<a href="#" className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">
																	Cancel
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							{/*begin::Widget 6*/}
							<div className="m-widget15">
								<div className="m-widget15__chart" style={{height:'180px'}}>
									<canvas  id="m_chart_sales_stats"></canvas>
								</div>
								<div className="m-widget15__items">
									<div className="row">
										<div className="col">
											<div className="m-widget15__item">
												<span className="m-widget15__stats">
													63%
												</span>
												<span className="m-widget15__text">
													Sales Grow
												</span>
												<div className="m--space-10"></div>
												<div className="progress m-progress--sm">
													<div className="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div className="col">
											<div className="m-widget15__item">
												<span className="m-widget15__stats">
													54%
												</span>
												<span className="m-widget15__text">
													Orders Grow
												</span>
												<div className="m--space-10"></div>
												<div className="progress m-progress--sm">
													<div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<div className="m-widget15__item">
												<span className="m-widget15__stats">
													41%
												</span>
												<span className="m-widget15__text">
													Profit Grow
												</span>
												<div className="m--space-10"></div>
												<div className="progress m-progress--sm">
													<div className="progress-bar bg-success" role="progressbar" style={{width: '55%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div className="col">
											<div className="m-widget15__item">
												<span className="m-widget15__stats">
													79%
												</span>
												<span className="m-widget15__text">
													Member Grow
												</span>
												<div className="m--space-10"></div>
												<div className="progress m-progress--sm">
													<div className="progress-bar bg-primary" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="m-widget15__desc">
									* lorem ipsum dolor sit amet consectetuer sediat elit
								</div>
							</div>
							{/*end::Widget 6*/}
						</div>
					</div>
					{/*end:: Widgets/Sales Stats*/}
				</div>
				<div className="col-xl-4">
					{/*begin:: Widgets/Inbound Bandwidth*/}
					<div className="m-portlet m-portlet--bordered-semi m-portlet--half-height m-portlet--fit " style={{minHeight: '300px'}}>
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Inbound Bandwidth
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover" aria-expanded="true">
										<a href="#" className="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">
											Today
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style={{left: 'auto', right: '36.5px'}}></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">
																		Activity
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">
																		Messages
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">
																		FAQ
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">
																		Support
																	</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							{/*begin::Widget5*/}
							<div className="m-widget20">
								<div className="m-widget20__number m--font-success">
									670
								</div>
								<div className="m-widget20__chart" style={{height:'160px'}}>
									<canvas id="m_chart_bandwidth1"></canvas>
								</div>
							</div>
							{/*end::Widget 5*/}
						</div>
					</div>
					{/*end:: Widgets/Inbound Bandwidth*/}
					<div className="m--space-30"></div>
					{/*begin:: Widgets/Outbound Bandwidth*/}
					<div className="m-portlet m-portlet--bordered-semi m-portlet--half-height m-portlet--fit " style={{minHeight: '300px'}}>
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Outbound Bandwidth
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover" aria-expanded="true">
										<a href="#" className="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">
											Today
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style={{left: 'auto', right: '36.5px'}}></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">
																		Activity
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">
																		Messages
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">
																		FAQ
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">
																		Support
																	</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							{/*begin::Widget5*/}
							<div className="m-widget20">
								<div className="m-widget20__number m--font-warning">
									340
								</div>
								<div className="m-widget20__chart" style={{height:'160px'}}>
									<canvas id="m_chart_bandwidth2"></canvas>
								</div>
							</div>
							{/*end::Widget 5*/}
						</div>
					</div>
					{/*end:: Widgets/Outbound Bandwidth*/}
				</div>
				<div className="col-xl-4">
					{/*begin:: Widgets/Top Products*/}
					<div className="m-portlet m-portlet--full-height m-portlet--fit ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Top Products
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover" aria-expanded="true">
										<a href="#" className="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">
											All
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style={{left: 'auto', right: '36.5px'}}></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">
																		Activity
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">
																		Messages
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">
																		FAQ
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">
																		Support
																	</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							{/*begin::Widget5*/}
							<div className="m-widget4 m-widget4--chart-bottom" style={{minHeight: '480px'}}>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo3.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											Phyton
										</span>
										<br/>
										<span className="m-widget4__sub">
											A Programming Language
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">
											+$17
										</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo1.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											FlyThemes
										</span>
										<br/>
										<span className="m-widget4__sub">
											A Let's Fly Fast Again Language
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">
											+$300
										</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo4.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											Starbucks
										</span>
										<br/>
										<span className="m-widget4__sub">
											Good Coffee & Snacks
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">
											+$300
										</span>
									</span>
								</div>
								<div className="m-widget4__chart m-portlet-fit--sides m--margin-top-20" style={{height:'260px'}}>
									<canvas id="m_chart_trends_stats_2"></canvas>
								</div>
							</div>
							{/*end::Widget 5*/}
						</div>
					</div>
					{/*end:: Widgets/Top Products*/}
				</div>
			</div>
			{/*End::Main Portlet*/}
			{/*Begin::Main Portlet*/}
			<div className="row">
				<div className="col-xl-8">
					{/*begin:: Widgets/Best Sellers*/}
					<div className="m-portlet m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Best Sellers
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm" role="tablist">
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_widget5_tab1_content" role="tab">
											Last Month
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget5_tab2_content" role="tab">
											last Year
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget5_tab3_content" role="tab">
											All time
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							{/*begin::Content*/}
							<div className="tab-content">
								<div className="tab-pane active" id="m_widget5_tab1_content" aria-expanded="true">
									{/*begin::m-widget5*/}
									<div className="m-widget5">
										<div className="m-widget5__item">
											<div className="m-widget5__pic">
												<img className="m-widget7__img" src="assets/app/media/img/products/product6.jpg" alt="" />
											</div>
											<div className="m-widget5__content">
												<h4 className="m-widget5__title">
													Great Logo Designn
												</h4>
												<span className="m-widget5__desc">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<div className="m-widget5__info">
													<span className="m-widget5__author">
														Author:
													</span>
													<span className="m-widget5__info-label">
														author:
													</span>
													<span className="m-widget5__info-author-name">
														Fly themes
													</span>
													<span className="m-widget5__info-label">
														Released:
													</span>
													<span className="m-widget5__info-date m--font-info">
														23.08.17
													</span>
												</div>
											</div>
											<div className="m-widget5__stats1">
												<span className="m-widget5__number">
													19,200
												</span>
												<br/>
												<span className="m-widget5__sales">
													sales
												</span>
											</div>
											<div className="m-widget5__stats2">
												<span className="m-widget5__number">
													1046
												</span>
												<br/>
												<span className="m-widget5__votes">
													votes
												</span>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__pic">
												<img className="m-widget7__img" src="assets/app/media/img/products/product10.jpg" alt="" />
											</div>
											<div className="m-widget5__content">
												<h4 className="m-widget5__title">
													Branding Mockup
												</h4>
												<span className="m-widget5__desc">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<div className="m-widget5__info">
													<span className="m-widget5__author">
														Author:
													</span>
													<span className="m-widget5__info-author m--font-info">
														Fly themes
													</span>
													<span className="m-widget5__info-label">
														Released:
													</span>
													<span className="m-widget5__info-date m--font-info">
														23.08.17
													</span>
												</div>
											</div>
											<div className="m-widget5__stats1">
												<span className="m-widget5__number">
													24,583
												</span>
												<br/>
												<span className="m-widget5__sales">
													sales
												</span>
											</div>
											<div className="m-widget5__stats2">
												<span className="m-widget5__number">
													3809
												</span>
												<br/>
												<span className="m-widget5__votes">
													votes
												</span>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__pic">
												<img className="m-widget7__img" src="assets/app/media/img/products/product11.jpg" alt="" />
											</div>
											<div className="m-widget5__content">
												<h4 className="m-widget5__title">
													Awesome Mobile App
												</h4>
												<span className="m-widget5__desc">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<div className="m-widget5__info">
													<span className="m-widget5__author">
														Author:
													</span>
													<span className="m-widget5__info-author m--font-info">
														Fly themes
													</span>
													<span className="m-widget5__info-label">
														Released:
													</span>
													<span className="m-widget5__info-date m--font-info">
														23.08.17
													</span>
												</div>
											</div>
											<div className="m-widget5__stats1">
												<span className="m-widget5__number">
													10,054
												</span>
												<br/>
												<span className="m-widget5__sales">
													sales
												</span>
											</div>
											<div className="m-widget5__stats2">
												<span className="m-widget5__number">
													1103
												</span>
												<br/>
												<span className="m-widget5__votes">
													votes
												</span>
											</div>
										</div>
									</div>
									{/*end::m-widget5*/}
								</div>
								<div className="tab-pane" id="m_widget5_tab2_content" aria-expanded="false">
									{/*begin::m-widget5*/}
									<div className="m-widget5">
										<div className="m-widget5__item">
											<div className="m-widget5__pic">
												<img className="m-widget7__img" src="assets/app/media/img/products/product11.jpg" alt="" />
											</div>
											<div className="m-widget5__content">
												<h4 className="m-widget5__title">
													Branding Mockup
												</h4>
												<span className="m-widget5__desc">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<div className="m-widget5__info">
													<span className="m-widget5__author">
														Author:
													</span>
													<span className="m-widget5__info-author m--font-info">
														Fly themes
													</span>
													<span className="m-widget5__info-label">
														Released:
													</span>
													<span className="m-widget5__info-date m--font-info">
														23.08.17
													</span>
												</div>
											</div>
											<div className="m-widget5__stats1">
												<span className="m-widget5__number">
													24,583
												</span>
												<br/>
												<span className="m-widget5__sales">
													sales
												</span>
											</div>
											<div className="m-widget5__stats2">
												<span className="m-widget5__number">
													3809
												</span>
												<br/>
												<span className="m-widget5__votes">
													votes
												</span>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__pic">
												<img className="m-widget7__img" src="assets/app/media/img/products/product6.jpg" alt="" />
											</div>
											<div className="m-widget5__content">
												<h4 className="m-widget5__title">
													Great Logo Designn
												</h4>
												<span className="m-widget5__desc">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<div className="m-widget5__info">
													<span className="m-widget5__author">
														Author:
													</span>
													<span className="m-widget5__info-author m--font-info">
														Fly themes
													</span>
													<span className="m-widget5__info-label">
														Released:
													</span>
													<span className="m-widget5__info-date m--font-info">
														23.08.17
													</span>
												</div>
											</div>
											<div className="m-widget5__stats1">
												<span className="m-widget5__number">
													19,200
												</span>
												<br/>
												<span className="m-widget5__sales">
													sales
												</span>
											</div>
											<div className="m-widget5__stats2">
												<span className="m-widget5__number">
													1046
												</span>
												<br/>
												<span className="m-widget5__votes">
													votes
												</span>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__pic">
												<img className="m-widget7__img" src="assets/app/media/img/products/product10.jpg" alt="" />
											</div>
											<div className="m-widget5__content">
												<h4 className="m-widget5__title">
													Awesome Mobile App
												</h4>
												<span className="m-widget5__desc">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<div className="m-widget5__info">
													<span className="m-widget5__author">
														Author:
													</span>
													<span className="m-widget5__info-author m--font-info">
														Fly themes
													</span>
													<span className="m-widget5__info-label">
														Released:
													</span>
													<span className="m-widget5__info-date m--font-info">
														23.08.17
													</span>
												</div>
											</div>
											<div className="m-widget5__stats1">
												<span className="m-widget5__number">
													10,054
												</span>
												<br/>
												<span className="m-widget5__sales">
													sales
												</span>
											</div>
											<div className="m-widget5__stats2">
												<span className="m-widget5__number">
													1103
												</span>
												<br/>
												<span className="m-widget5__votes">
													votes
												</span>
											</div>
										</div>
									</div>
									{/*end::m-widget5*/}
								</div>
								<div className="tab-pane" id="m_widget5_tab3_content" aria-expanded="false">
									{/*begin::m-widget5*/}
									<div className="m-widget5">
										<div className="m-widget5__item">
											<div className="m-widget5__pic">
												<img className="m-widget7__img" src="assets/app/media/img/products/product10.jpg" alt="" />
											</div>
											<div className="m-widget5__content">
												<h4 className="m-widget5__title">
													Branding Mockup
												</h4>
												<span className="m-widget5__desc">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<div className="m-widget5__info">
													<span className="m-widget5__author">
														Author:
													</span>
													<span className="m-widget5__info-author m--font-info">
														Fly themes
													</span>
													<span className="m-widget5__info-label">
														Released:
													</span>
													<span className="m-widget5__info-date m--font-info">
														23.08.17
													</span>
												</div>
											</div>
											<div className="m-widget5__stats1">
												<span className="m-widget5__number">
													10.054
												</span>
												<br/>
												<span className="m-widget5__sales">
													sales
												</span>
											</div>
											<div className="m-widget5__stats2">
												<span className="m-widget5__number">
													1103
												</span>
												<br/>
												<span className="m-widget5__votes">
													votes
												</span>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__pic">
												<img className="m-widget7__img" src="assets/app/media/img/products/product11.jpg" alt="" />
											</div>
											<div className="m-widget5__content">
												<h4 className="m-widget5__title">
													Great Logo Designn
												</h4>
												<span className="m-widget5__desc">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<div className="m-widget5__info">
													<span className="m-widget5__author">
														Author:
													</span>
													<span className="m-widget5__info-author m--font-info">
														Fly themes
													</span>
													<span className="m-widget5__info-label">
														Released:
													</span>
													<span className="m-widget5__info-date m--font-info">
														23.08.17
													</span>
												</div>
											</div>
											<div className="m-widget5__stats1">
												<span className="m-widget5__number">
													24,583
												</span>
												<br/>
												<span className="m-widget5__sales">
													sales
												</span>
											</div>
											<div className="m-widget5__stats2">
												<span className="m-widget5__number">
													3809
												</span>
												<br/>
												<span className="m-widget5__votes">
													votes
												</span>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__pic">
												<img className="m-widget7__img" src="assets/app/media/img/products/product6.jpg" alt="" />
											</div>
											<div className="m-widget5__content">
												<h4 className="m-widget5__title">
													Awesome Mobile App
												</h4>
												<span className="m-widget5__desc">
													Make Metronic Great  Again.Lorem Ipsum Amet
												</span>
												<div className="m-widget5__info">
													<span className="m-widget5__author">
														Author:
													</span>
													<span className="m-widget5__info-author m--font-info">
														Fly themes
													</span>
													<span className="m-widget5__info-label">
														Released:
													</span>
													<span className="m-widget5__info-date m--font-info">
														23.08.17
													</span>
												</div>
											</div>
											<div className="m-widget5__stats1">
												<span className="m-widget5__number">
													19,200
												</span>
												<br/>
												<span className="m-widget5__sales">
													1046
												</span>
											</div>
											<div className="m-widget5__stats2">
												<span className="m-widget5__number">
													1046
												</span>
												<br/>
												<span className="m-widget5__votes">
													votes
												</span>
											</div>
										</div>
									</div>
									{/*end::m-widget5*/}
								</div>
							</div>
							{/*end::Content*/}
						</div>
					</div>
					{/*end:: Widgets/Best Sellers*/}
				</div>
				<div className="col-xl-4">
					{/*begin:: Widgets/Authors Profit*/}
					<div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Authors Profit
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
										<a href="#" className="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">
											All
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__section m-nav__section--first">
																<span className="m-nav__section-text">
																	Quick Actions
																</span>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">
																		Activity
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">
																		Messages
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">
																		FAQ
																	</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="#" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">
																		Support
																	</span>
																</a>
															</li>
															<li className="m-nav__separator m-nav__separator--fit"></li>
															<li className="m-nav__item">
																<a href="#" className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">
																	Cancel
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="m-widget4">
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo5.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											Trump Themes
										</span>
										<br/>
										<span className="m-widget4__sub">
											Make Metronic Great Again
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">
											+$2500
										</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo4.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											StarBucks
										</span>
										<br/>
										<span className="m-widget4__sub">
											Good Coffee & Snacks
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">
											-$290
										</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo3.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											Phyton
										</span>
										<br/>
										<span className="m-widget4__sub">
											A Programming Language
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">
											+$17
										</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo2.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											GreenMakers
										</span>
										<br/>
										<span className="m-widget4__sub">
											Make Green Great Again
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">
											-$2.50
										</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo1.png" alt="" />
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											FlyThemes
										</span>
										<br/>
										<span className="m-widget4__sub">
											A Let's Fly Fast Again Language
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">
											+$200
										</span>
									</span>
								</div>
							</div>
						</div>
					</div>
					{/*end:: Widgets/Authors Profit*/}
				</div>
			</div>
			{/*End::Main Portlet*/}
		</div>
	</div>
    );
  }
}

export default MainBodyPartial;
