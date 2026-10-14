import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY } from './app.constant';

describe('AppComponent', () => {
  beforeEach(() => {
    localStorage.removeItem(LOCAL_STORAGE_THEME_KEY);
    document.body.className = '';
    TestBed.configureTestingModule({ providers: appConfig.providers });
  });

  it('creates the shell with one tab per labelled route and applies the default theme', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await TestBed.inject(ApplicationRef).whenStable();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('nav a[mat-tab-link]').length).toBe(3);
    expect(document.body.classList).toContain(`${DEFAULT_THEME}-theme`);
    expect(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)).toBe(DEFAULT_THEME);
  });
});
