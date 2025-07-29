import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {


  isCollapsed = false;
  activeRoute: string = '';
  orgName: string | null = '';
  roleName: string | null = '';
  showMasterMenu: boolean = false;
  showSuperAdminMenu: boolean = false;
  showMediaMenu: boolean = false;
  showNonadminMenu: boolean = false;
  showContentData: boolean = false;
  organizationId: any;
  roleId: any;


  @Output() sidebarStateChange = new EventEmitter<boolean>();

  constructor(private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {
    this.checkWindowWidth();

    this.orgName = localStorage.getItem('org_name');
    this.organizationId = localStorage.getItem('org_id');
    this.roleName = localStorage.getItem('role_name');
    this.roleId = localStorage.getItem('user_role_id')


    this.showSuperAdminMenu = this.orgName === 'KOEL' && this.roleName === 'Super Admin';
    this.showMediaMenu = this.roleName !== 'super Admin' && this.orgName !== 'KOEL';
    // this.showNonadminMenu = this.roleName != 'Super Admin' && this.orgName == 'KOEL';
    this.showNonadminMenu =
      ['asm', 'rsm', 'sales'].includes((this.roleName || '').toLowerCase()) &&
      this.orgName === 'KOEL';

this.showContentData = this.roleName === 'Content Manager' && this.orgName === 'KOEL';


  }

  menuItems = [
    { label: "Dashboard", icon: "pi pi-home", routerLink: ["/dashboard"] },
    { label: "Users", icon: "pi pi-users", routerLink: "/user-roles" },
    { label: "Reports", icon: "pi pi-chart-bar", routerLink: ["/reports"] },
    { label: "Settings", icon: "pi pi-cog", routerLink: ["/settings"] },
    { label: "home", icon: "pi pi-cog", routerLink: ["/home"] },
  ];


  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    setTimeout(() => {
      this.sidebarStateChange.emit(!this.isCollapsed);
    }, 0);
  }

  setActive(route: string) {
    this.activeRoute = route;
  }

  isMasterMenuOpen = false;
  // activeRoute = ''; // set this using Router events or manually

  toggleMasterMenu() {
    this.isMasterMenuOpen = !this.isMasterMenuOpen;
  }

  isMasterOpen = false;


  isRouteUnderMaster(): boolean {
    return [
      '/org',
      '/role-management',
      '/banner',
      '/category',
      '/fuel',
      '/product-ranges',
      '/products',
      '/variant',


    ].includes(this.activeRoute);
  }


  toggleMaster() {
    this.isMasterOpen = !this.isMasterOpen;
  }



  @HostListener('window:resize', [])
  onWindowResize() {
    this.checkWindowWidth();
  }

  checkWindowWidth() {
    if (window.innerWidth <= 991) {

      this.isMasterMenuOpen = false;
    }
  }

}
