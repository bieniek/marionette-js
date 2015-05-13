package marionette;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.solr.SolrAutoConfiguration;

@SpringBootApplication
@EnableAutoConfiguration(exclude=SolrAutoConfiguration.class)
public class App {
	public static void main(String[] args) throws Exception {
        SpringApplication.run(App.class, args);                      
    }	
}
