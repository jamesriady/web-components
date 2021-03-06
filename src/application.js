export class Application {
    root = null;
    title = 'Webpack';
    container = null;
    loadedApp = null;

    bootstrap(root) {
        this.root = root;

        this.root.innerHTML = `
            <header class="main-header">
                <a href="index2.html" class="logo">
                    <span class="logo-mini"><b>A</b>LT</span>
                    <span class="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav class="navbar navbar-static-top">
                    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span class="sr-only">Toggle navigation</span>
                    </a>

                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <li class="dropdown messages-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-envelope-o"></i>
                                    <span class="label label-success">4</span>
                                 </a>
                                <ul class="dropdown-menu">
                                    <li class="header">You have 4 messages</li>
                                    <li>
                                        <ul class="menu">
                                            <li>
                                                <a href="#">
                                                  <div class="pull-left">
                                                    <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                                                  </div>
                                                  <h4>
                                                    Support Team
                                                    <small><i class="fa fa-clock-o"></i> 5 mins</small>
                                                  </h4>
                                                  <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <div class="pull-left">
                                                    <img src="dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                                                  </div>
                                                  <h4>
                                                    AdminLTE Design Team
                                                    <small><i class="fa fa-clock-o"></i> 2 hours</small>
                                                  </h4>
                                                  <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <div class="pull-left">
                                                    <img src="dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                                                  </div>
                                                  <h4>
                                                    Developers
                                                    <small><i class="fa fa-clock-o"></i> Today</small>
                                                  </h4>
                                                  <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <div class="pull-left">
                                                    <img src="dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                                                  </div>
                                                  <h4>
                                                    Sales Department
                                                    <small><i class="fa fa-clock-o"></i> Yesterday</small>
                                                  </h4>
                                                  <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <div class="pull-left">
                                                    <img src="dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                                                  </div>
                                                  <h4>
                                                    Reviewers
                                                    <small><i class="fa fa-clock-o"></i> 2 days</small>
                                                  </h4>
                                                  <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footer">
                                        <a href="#">See All Messages</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown notifications-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                  <i class="fa fa-bell-o"></i>
                                  <span class="label label-warning">10</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="header">You have 10 notifications</li>
                                    <li>
                                        <ul class="menu">
                                            <li>
                                                <a href="#">
                                                  <i class="fa fa-users text-aqua"></i> 5 new members joined today
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                                                  page and may cause design problems
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <i class="fa fa-users text-red"></i> 5 new members joined
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <i class="fa fa-user text-red"></i> You changed your username
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footer">
                                        <a href="#">View all</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown tasks-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-flag-o"></i>
                                    <span class="label label-danger">9</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="header">You have 9 tasks</li>
                                    <li>
                                        <ul class="menu">
                                            <li><!-- Task item -->
                                                <a href="#">
                                                  <h3>
                                                    Design some buttons
                                                    <small class="pull-right">20%</small>
                                                  </h3>
                                                  <div class="progress xs">
                                                    <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar"
                                                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                      <span class="sr-only">20% Complete</span>
                                                    </div>
                                                  </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <h3>
                                                    Create a nice theme
                                                    <small class="pull-right">40%</small>
                                                  </h3>
                                                  <div class="progress xs">
                                                    <div class="progress-bar progress-bar-green" style="width: 40%" role="progressbar"
                                                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                      <span class="sr-only">40% Complete</span>
                                                    </div>
                                                  </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <h3>
                                                    Some task I need to do
                                                    <small class="pull-right">60%</small>
                                                  </h3>
                                                  <div class="progress xs">
                                                    <div class="progress-bar progress-bar-red" style="width: 60%" role="progressbar"
                                                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                      <span class="sr-only">60% Complete</span>
                                                    </div>
                                                  </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  <h3>
                                                    Make beautiful transitions
                                                    <small class="pull-right">80%</small>
                                                  </h3>
                                                  <div class="progress xs">
                                                    <div class="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar"
                                                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                      <span class="sr-only">80% Complete</span>
                                                    </div>
                                                  </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footer">
                                        <a href="#">View all tasks</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown user user-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                                    <span class="hidden-xs">Alexander Pierce</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="user-header">
                                        <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                                        <p>
                                          Alexander Pierce - Web Developer
                                          <small>Member since Nov. 2012</small>
                                        </p>
                                    </li>
                                    <li class="user-body">
                                        <div class="row">
                                            <div class="col-xs-4 text-center">
                                                <a href="#">Followers</a>
                                            </div>
                                            <div class="col-xs-4 text-center">
                                                <a href="#">Sales</a>
                                            </div>
                                            <div class="col-xs-4 text-center">
                                                <a href="#">Friends</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="user-footer">
                                        <div class="pull-left">
                                            <a href="#" class="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div class="pull-right">
                                            <a href="#" class="btn btn-default btn-flat">Sign out</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <aside class="main-sidebar">
                <section class="sidebar">
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                        </div>
                        <div class="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" class="sidebar-form">
                        <div class="input-group">
                          <input type="text" name="q" class="form-control" placeholder="Search...">
                          <span class="input-group-btn">
                                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                                </button>
                              </span>
                        </div>
                    </form>
                    <ul class="sidebar-menu" data-widget="tree">
                        <li class="header">MAIN NAVIGATION</li>
                        <li>
                          <a href="#" data-app="react-app">
                            <i class="fa fa-dashboard"></i> <span>React</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-app="angular-app">
                            <i class="fa fa-dashboard"></i> <span>Angular</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-app="vue-app">
                            <i class="fa fa-dashboard"></i> <span>Vue</span>
                          </a>
                        </li>
                        <li>
                          <a href="pages/widgets.html">
                            <i class="fa fa-th"></i> <span>Widgets</span>
                            <span class="pull-right-container">
                              <small class="label pull-right bg-green">new</small>
                            </span>
                          </a>
                        </li>
                    </ul>
                </section>
            </aside>

            <div class="content-wrapper">
    
            </div>

            <footer class="main-footer">
                <div class="pull-right hidden-xs">
                    <b>Version</b> 2.4.0
                </div>
                <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
                reserved.
            </footer>
            `;

        this.container = this.root.querySelector('.content-wrapper');
        this.root.addEventListener('click', this.handleButtonClick);
    }

    handleButtonClick = (event) => {
        event.preventDefault()
        
        if (event.target.nodeName.toLowerCase() !== 'a') {
            return;
        }

        this.loadApp(event.target.dataset.app);
    };

    loadApp(app) {
        this.container.innerHTML = '';

        this.loadedApp = document.createElement(app);

        this.loadedApp.setAttribute('title', app);

        this.loadedApp.addEventListener('load', (load) => {
            console.log('loaded', load);
        });
        this.container.appendChild(this.loadedApp);
    }
}

export function render(Component, element) {
    const component = new Component();
    component.bootstrap(element);
}
