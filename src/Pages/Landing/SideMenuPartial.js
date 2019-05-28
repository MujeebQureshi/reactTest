import React, { Component } from 'react';

class SideMenuPartial extends Component {
  render() {
    return (
	<div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
		{/* BEGIN: Left Aside */}
			{/*<button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
				<i className="la la-close"></i>
			</button>*/}
		<div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
			{/* BEGIN: Aside Menu */}
			<div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " data-menu-vertical="true" data-menu-scrollable="false" data-menu-dropdown-timeout="500" >
				<ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
					<li className="m-menu__item  m-menu__item--active" aria-haspopup="true" >
						<a  href="#" className="m-menu__link ">
							<i className="m-menu__link-icon flaticon-line-graph"></i>
							<span className="m-menu__link-title">
								<span className="m-menu__link-wrap">
									<span className="m-menu__link-text">
										Dashboard
									</span>
									<span className="m-menu__link-badge">
										<span className="m-badge m-badge--danger">
											2
										</span>
									</span>
								</span>
							</span>
						</a>
					</li>
					<li className="m-menu__section">
						<h4 className="m-menu__section-text">
							Components
						</h4>
						<i className="m-menu__section-icon flaticon-more-v3"></i>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-layers"></i>
							<span className="m-menu__link-text">
								Base
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Base
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/state.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											State Colors
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/typography.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Typography
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/stack.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Stack
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/tables.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Tables
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/progress.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Progress
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/modal.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Modal
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/alerts.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Alerts
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/popover.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Popover
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/tooltip.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Tooltip
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/blockui.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Block UI
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/spinners.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Spinners
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/scrollable.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Scrollable
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/dropdown.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Dropdown
										</span>
									</a>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Tabs
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/base/tabs/bootstrap.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Bootstrap Tabs
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/base/tabs/line.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Line Tabs
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/navs.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Navs
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/lists.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Lists
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/treeview.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Tree View
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/bootstrap-notify.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Bootstrap Notify
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/base/toastr.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Toastr
										</span>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-share"></i>
							<span className="m-menu__link-text">
								Icons
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/icons/flaticon.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Flaticon
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/icons/fontawesome.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Fontawesome
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/icons/lineawesome.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Lineawesome
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/icons/socicons.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Socicons
										</span>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-multimedia-1"></i>
							<span className="m-menu__link-text">
								Buttons
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Buttons
										</span>
									</a>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Button Base
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/buttons/base/default.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Default Style
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/buttons/base/square.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Square Style
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/buttons/base/pill.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Pill Style
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/buttons/base/air.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Air Style
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/buttons/group.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Button Group
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/buttons/dropdown.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Button Dropdown
										</span>
									</a>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Button Icon
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/buttons/icon/lineawesome.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Lineawesome Icons
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/buttons/icon/fontawesome.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Fontawesome Icons
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/buttons/icon/flaticon.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Flaticon Icons
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-interface-7"></i>
							<span className="m-menu__link-text">
								Forms
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Forms
										</span>
									</a>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Form Controls
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/controls/base.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Base Inputs
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/controls/checkbox-radio.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Checkbox & Radio
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/controls/switch.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Switch
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/controls/input-group.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Input Groups
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Form Widgets
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-datepicker.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Datepicker
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-datetimepicker.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Datetimepicker
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-timepicker.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Timepicker
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-daterangepicker.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Daterangepicker
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-touchspin.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Touchspin
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-maxlength.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Maxlength
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-switch.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Switch
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-multipleselectsplitter.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Multiple Select Splitter
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-select.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Bootstrap Select
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/select2.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Select2
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/typeahead.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Typeahead
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/nouislider.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														noUiSlider
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/ion-range-slider.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Ion Range Slider
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/input-mask.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Input Masks
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/summernote.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Summernote WYSIWYG
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/bootstrap-markdown.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Markdown Editor
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/autosize.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Autosize
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/clipboard.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Clipboard
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/dropzone.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Dropzone
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/widgets/recaptcha.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Google reCaptcha
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Form Layouts
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/layouts/default-forms.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Default Forms
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/layouts/multi-column-forms.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Multi Column Forms
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/layouts/action-bars.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Action Bars
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Form Validation
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/validation/states.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Validation States
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/validation/form-controls.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Form Controls
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/forms/validation/form-widgets.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Form Widgets
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-tabs"></i>
							<span className="m-menu__link-text">
								Datatables
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Datatables
										</span>
									</a>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Base
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/data-local.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Local Data
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/data-json.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														JSON Data
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/data-ajax.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Ajax Data
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/html-table.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														HTML Table
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/record-selection.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Record Selection
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/local-sort.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Local Sort
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/column-rendering.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Column Rendering
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/column-width.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Column Width
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/responsive-columns.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Responsive Columns
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/base/translation.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Translation
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Scrolling
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/scrolling/vertical.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Vertical Scrolling
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/scrolling/horizontal.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Horizontal Scrolling
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/scrolling/both.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Both Scrolling
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Locked Columns
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/locked/left.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Left Locked Columns
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/locked/right.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Right Locked Columns
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/locked/both.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Both Locked Columns
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Child Datatables
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/child/data-local.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Local Data
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/child/data-ajax.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Remote Data
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											API
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/api/methods.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														API Methods
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/datatables/api/events.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Events
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-interface-1"></i>
							<span className="m-menu__link-text">
								Portlets
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Portlets
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/portlets/base.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Base Portlets
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/portlets/advanced.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Advanced Portlets
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/portlets/creative.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Creative Portlets
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/portlets/tabbed.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Tabbed Portlets
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/portlets/draggable.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Draggable Portlets
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/portlets/tools.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Portlet Tools
										</span>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-network"></i>
							<span className="m-menu__link-text">
								Widgets
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Widgets
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/widgets/general.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											General Widgets
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/widgets/chart.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Chart Widgets
										</span>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-calendar"></i>
							<span className="m-menu__link-text">
								Calendar
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Calendar
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/calendar/basic.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Basic Calendar
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/calendar/list-view.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											List Views
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/calendar/google.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Google Calendar
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/calendar/external-events.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											External Events
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/calendar/background-events.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Background Events
										</span>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-diagram"></i>
							<span className="m-menu__link-text">
								Charts
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Charts
										</span>
									</a>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											amCharts
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/charts/amcharts/charts.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														amCharts Charts
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/charts/amcharts/stock-charts.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														amCharts Stock Charts
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a  href="components/charts/amcharts/maps.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														amCharts Maps
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/charts/flotcharts.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Flot Charts
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/charts/google-charts.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Google Charts
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/charts/morris-charts.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Morris Charts
										</span>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-placeholder-1"></i>
							<span className="m-menu__link-text">
								Maps
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Maps
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/maps/google-maps.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Google Maps
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/maps/jqvmap.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											JQVMap
										</span>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-signs-2"></i>
							<span className="m-menu__link-text">
								Utils
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Utils
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/utils/session-timeout.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Session Timeout
										</span>
									</a>
								</li>
								<li className="m-menu__item " aria-haspopup="true" >
									<a  href="components/utils/idle-timer.html" className="m-menu__link ">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Idle Timer
										</span>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="m-menu__section">
						<h4 className="m-menu__section-text">
							Snippets
						</h4>
						<i className="m-menu__section-icon flaticon-more-v3"></i>
					</li>
					<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
						<a  href="#" className="m-menu__link m-menu__toggle">
							<i className="m-menu__link-icon flaticon-suitcase"></i>
							<span className="m-menu__link-text">
								Custom Pages
							</span>
							<i className="m-menu__ver-arrow la la-angle-right"></i>
						</a>
						<div className="m-menu__submenu">
							<span className="m-menu__arrow"></span>
							<ul className="m-menu__subnav">
								<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
									<a  href="#" className="m-menu__link ">
										<span className="m-menu__link-text">
											Custom Pages
										</span>
									</a>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											User Pages
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/user/login-1.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Login - 1
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/user/login-2.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Login - 2
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/user/login-3.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Login - 3
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/user/login-4.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Login - 4
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/user/login-5.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Login - 5
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
									<a  href="#" className="m-menu__link m-menu__toggle">
										<i className="m-menu__link-bullet m-menu__link-bullet--dot">
											<span></span>
										</i>
										<span className="m-menu__link-text">
											Error Pages
										</span>
										<i className="m-menu__ver-arrow la la-angle-right"></i>
									</a>
									<div className="m-menu__submenu">
										<span className="m-menu__arrow"></span>
										<ul className="m-menu__subnav">
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/errors/error-1.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Error 1
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/errors/error-2.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Error 2
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/errors/error-3.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Error 3
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/errors/error-4.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Error 4
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/errors/error-5.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Error 5
													</span>
												</a>
											</li>
											<li className="m-menu__item " aria-haspopup="true" >
												<a target="_blank" href="snippets/pages/errors/error-6.html" className="m-menu__link ">
													<i className="m-menu__link-bullet m-menu__link-bullet--dot">
														<span></span>
													</i>
													<span className="m-menu__link-text">
														Error 6
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			{/* END: Aside Menu */}
		</div>
		{/* END: Left Aside */}
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
	</div>
    );
  }
}

export default SideMenuPartial;
