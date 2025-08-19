

@SpringBootApplication
public static void main(String[] args){
    SpringApplication.run(DemoApplication.class, args)
}


@PutMapping(path="{studentID}")
public void updateStudent(
    @PathVariable("studentId") Long id
    @RequestParam(required=false) String name,
    @RequestParam(required=false) String email){
        


}

Comparator<Integer> com = new Comparator<>(){

    public int compare(Integer i , Integer j){
        if(i>j){
            return 1;
        }else{
            return -1;
        }
    }

}

AuthenticationManagerBuilder
DaoAuthenticationProvider
userDetailsService interface
UsernamePasswordAuthenticationFilter
OncePerRequestFilter - Override doFilterInternal
SecurityContextHolder.getContext.setAuthentication(authentication)


@Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder());
        return provider;
    }



@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{

    @Override
    public void configure(HttpSecurity httpSecurity){

        httpSecurity
        .authorizeRequests()
        .antMatchers("/").permilAll()
        .antMatchers("/api/**").hasRole(STUDENT.name())
        .anyRequest()
        .authenticated()
        .and()
        .httpBasic()
    }

    
}

@SequenceGenerator(name="my_seq", sequenceName="my_seq",allocationSize=1)
@GeneratedValue(strategy="GenerationType.sequence",generator="my_seq"


Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Allow all endpoints
                .allowedOrigins("http://example.com")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("Authorization", "Content-Type")
                .exposedHeaders("Authorization")
                .maxAge(3600);
    } )


